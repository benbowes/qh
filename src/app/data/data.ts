export interface Property {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: {
    url: string;
    caption: string;
    imageType: "PRIMARY";
  };
  rating: {
    ratingValue: number;
    ratingType: "self" | "star";
  };
}

export interface Offer {
  promotion: {
    title: "Exclusive Deal" | "Bonus Points" | "Red Hot";
    type: "MEMBER" | "CAMPAIGN";
  };
  name: "Deluxe Balcony Room" | "Deluxe King" | "Deluxe King Room";
  displayPrice: {
    amount: number;
    currency: "AUD";
  };
  savings: {
    amount: number;
    currency: "AUD";
  } | null;
  cancellationOption: {
    cancellationType: "NOT_REFUNDABLE" | "FREE_CANCELLATION";
  };
}

export interface Result {
  id: string;
  property: Property;
  offer: Offer;
}

export interface Data {
  results: Result[];
}
