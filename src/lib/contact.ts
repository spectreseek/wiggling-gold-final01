// One place for the numbers and links the site sends people to.
const ORDER_NUMBER = "233556943631";
const MANSA_NUMBER = "233558240434";

export const whatsappUrl = (message: string, number = ORDER_NUMBER) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const ORDER_WHATSAPP_URL = whatsappUrl("Hello Wiggling Gold, I would like to order feed.");

export const MANSA_WHATSAPP_URL = whatsappUrl("Hello, I would like to know more about Project Mansa.", MANSA_NUMBER);

/** A message to the Project Mansa line, used by the training registration form. */
export const mansaWhatsappUrl = (message: string) => whatsappUrl(message, MANSA_NUMBER);

export const EMAIL = "askwigglinggold@gmail.com";
export const PHONES = ["055 694 3631", "055 694 3630"];
export const MANSA_PHONE = "055 824 0434";
// The office address, from the starter kit flyer.
export const ADDRESS = { street: "17 Ayikah Gboza St, Kokomlemle", city: "Accra, Ghana", gps: "GA-070-6472" };

// Both map links point at the office. Google doesn't read Ghana Post GPS codes, so they use the street address.
const mapQuery = encodeURIComponent(`${ADDRESS.street}, ${ADDRESS.city}`);
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`;
export const SOCIAL_HANDLE = "@wigglinggoldgh";
