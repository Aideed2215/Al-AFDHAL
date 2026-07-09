export type LeadSource = "homepage" | "booking_page" | "service_page" | "doctor_section";

export interface BookingFormValues {
  name: string;
  phone: string;
  service: string;
  doctor: string;
  date: string;
  notes: string;
}

export const INITIAL_FORM: BookingFormValues = {
  name: "",
  phone: "",
  service: "",
  doctor: "",
  date: "",
  notes: "",
};

export interface BookingService {
  id: string;
  title: string;
}

export interface BookingDoctor {
  id: string;
  name: string;
}

export interface BookingRequest {
  patientName: string;
  phone: string;
  serviceId: string;
  doctorId?: string;
  preferredDate: string;
  notes?: string;
}

export interface BookingResult {
  status: "redirect" | "submitted" | "failed";
  redirectUrl?: string;
}

export interface BookingProvider {
  createBooking(input: BookingRequest): Promise<BookingResult>;
}
