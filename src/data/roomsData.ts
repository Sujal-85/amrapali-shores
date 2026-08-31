import roomAc from "@/assets/room-ac.jpeg";
import roomBed1 from "@/assets/room-bed-1.jpeg";
import roomBed3 from "@/assets/room-bed-3.jpeg";
import roomCoupleCottage from "@/assets/room-couple-cottage.jpeg";

export interface RoomItem {
  id: string;
  aliases?: string[];
  titleKey: string;
  price: string;
  numericPrice: number;
  capacityKey: string;
  capacityCount: number;
  image: string;
  featuresKeys: string[];
  descriptionKey: string;
  isAC: boolean;
  isCottage: boolean;
}

export const ROOMS_DATA: RoomItem[] = [
  {
    id: "ac-room-2p",
    aliases: ["ac-room", "ac-room-2-person", "non-ac-room"],
    titleKey: "rooms.types.ac-room-2p",
    price: "₹2,000",
    numericPrice: 2000,
    capacityKey: "rooms.capacities.2p",
    capacityCount: 2,
    image: roomAc,
    featuresKeys: [
      "rooms.amenities.ac",
      "rooms.amenities.attached-bathroom",
      "rooms.amenities.private",
      "rooms.amenities.garden-view"
    ],
    descriptionKey: "rooms.descriptions.ac-room-2p",
    isAC: true,
    isCottage: false,
  },
  {
    id: "ac-room-3p",
    aliases: ["ac-room-3-person"],
    titleKey: "rooms.types.ac-room-3p",
    price: "₹2,500",
    numericPrice: 2500,
    capacityKey: "rooms.capacities.3p",
    capacityCount: 3,
    image: roomBed1,
    featuresKeys: [
      "rooms.amenities.ac",
      "rooms.amenities.attached-bathroom",
      "rooms.amenities.private",
      "rooms.amenities.free-wifi",
      "rooms.amenities.garden-view"
    ],
    descriptionKey: "rooms.descriptions.ac-room-3p",
    isAC: true,
    isCottage: false,
  },
  {
    id: "couple-cottage-ac",
    aliases: ["couple-cottage"],
    titleKey: "rooms.types.couple-cottage-ac",
    price: "₹2,500",
    numericPrice: 2500,
    capacityKey: "rooms.capacities.2p",
    capacityCount: 2,
    image: roomCoupleCottage,
    featuresKeys: [
      "rooms.amenities.ac",
      "rooms.amenities.cottage",
      "rooms.amenities.attached-bathroom",
      "rooms.amenities.private",
      "rooms.amenities.garden-view"
    ],
    descriptionKey: "rooms.descriptions.couple-cottage-ac",
    isAC: true,
    isCottage: true,
  },
  {
    id: "family-cottage-5p-non-ac",
    aliases: ["family-cottage-ac", "family-cottage-fan", "joint-cottage"],
    titleKey: "rooms.types.family-cottage-5p-non-ac",
    price: "₹3,500",
    numericPrice: 3500,
    capacityKey: "rooms.capacities.5p",
    capacityCount: 5,
    image: roomBed3,
    featuresKeys: [
      "rooms.amenities.non-ac",
      "rooms.amenities.fan",
      "rooms.amenities.cottage",
      "rooms.amenities.attached-bathroom",
      "rooms.amenities.for-5-persons",
      "rooms.amenities.garden-view"
    ],
    descriptionKey: "rooms.descriptions.family-cottage-5p-non-ac",
    isAC: false,
    isCottage: true,
  },
];

export const SPECIAL_PACKAGE = {
  pricePerPerson: "₹2,000",
  effectiveDateKey: "rooms.effectiveFrom",
  titleKey: "rooms.packageTitle",
  subtitleKey: "rooms.packageSubtitle",
  noteKey: "rooms.packageNote",
  inclusionsKeys: [
    "rooms.packageInclusions.stay",
    "rooms.packageInclusions.meals",
    "rooms.packageInclusions.breakfast",
    "rooms.packageInclusions.tea"
  ]
};

export const getRoomById = (id?: string): RoomItem | undefined => {
  if (!id) return undefined;
  return ROOMS_DATA.find((r) => r.id === id || r.aliases?.includes(id));
};
