import type { BookingRequest, BookingResult, BookingProvider, BookingService, BookingDoctor } from "./types";
import { buildWhatsAppUrl } from "./whatsapp";

export class WhatsAppBookingProvider implements BookingProvider {
  private services: BookingService[];
  private doctors: BookingDoctor[];
  private whatsappNumber: string;

  constructor(services: BookingService[], doctors: BookingDoctor[], whatsappNumber: string) {
    this.services = services;
    this.doctors = doctors;
    this.whatsappNumber = whatsappNumber;
  }

  async createBooking(input: BookingRequest): Promise<BookingResult> {
    const data = {
      name: input.patientName,
      phone: input.phone,
      service: input.serviceId,
      doctor: input.doctorId ?? "",
      date: input.preferredDate,
      notes: input.notes ?? "",
    };

    return {
      status: "redirect",
      redirectUrl: buildWhatsAppUrl(data, this.services, this.doctors, this.whatsappNumber),
    };
  }
}
