"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type BookingContextValue = {
  openBooking: (trigger: HTMLButtonElement) => void;
};
const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({
  children,
  hostelworldUrl,
  bookingUrl,
  agodaUrl,
  messageUrl,
}: {
  children: ReactNode;
  hostelworldUrl: string | null;
  bookingUrl: string | null;
  agodaUrl: string | null;
  messageUrl: string | null;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const close = () => dialog.current?.close();
  const destinations = [
    { label: "Book on Hostelworld", url: hostelworldUrl },
    { label: "Book on Booking.com", url: bookingUrl },
    { label: "Book on Agoda", url: agodaUrl },
  ];

  return (
    <BookingContext.Provider
      value={{
        openBooking: (element) => {
          trigger.current = element;
          dialog.current?.showModal();
          setOpen(true);
        },
      }}
    >
      {children}
      <dialog
        ref={dialog}
        className="booking-dialog"
        aria-labelledby="booking-title"
        aria-describedby="booking-description"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href]',
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
      >
        <div className="booking-panel">
          <div className="booking-top">
            <span className="eyebrow">Your next stop</span>
            <button
              type="button"
              autoFocus
              className="icon-button"
              aria-label="Close booking options"
              onClick={close}
            >
              <X aria-hidden="true" size={22} />
            </button>
          </div>
          <h2 id="booking-title">A place in the family.</h2>
          <p id="booking-description">
            Choose how to arrange your stay. Reservations are handled by the
            booking provider or the hostel, not this website.
          </p>
          <div className="booking-choices">
            {destinations.map((destination) =>
              destination.url ? (
                <a
                  key={destination.label}
                  className="booking-choice"
                  href={destination.url}
                >
                  {destination.label}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              ) : (
                <div className="booking-unavailable" key={destination.label}>
                  <button
                    type="button"
                    disabled
                    className="booking-choice"
                    aria-describedby="booking-unverified"
                  >
                    {destination.label}
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </button>
                  <span>Property link awaiting verification</span>
                </div>
              ),
            )}
            {messageUrl && (
              <a className="booking-choice" href={messageUrl}>
                Message the Hostel
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            )}
          </div>
          {(!hostelworldUrl || !bookingUrl || !agodaUrl) && (
            <p id="booking-unverified" className="development-note">
              Design preview: property links have not been supplied. These
              options cannot make a booking yet.
            </p>
          )}
          <p className="booking-footnote">
            Availability, prices and confirmation are provided by your chosen
            booking channel. Walk-ins are also a reservation channel; a bed is
            not guaranteed.
          </p>
        </div>
      </dialog>
    </BookingContext.Provider>
  );
}

export function BookingButton({
  children = "Plan your stay",
  ...props
}: ComponentPropsWithoutRef<typeof Button>) {
  const context = useContext(BookingContext);
  if (!context) throw new Error("BookingButton requires BookingProvider");
  return (
    <Button
      {...props}
      onClick={(event) => context.openBooking(event.currentTarget)}
      aria-haspopup="dialog"
    >
      {children}
    </Button>
  );
}
