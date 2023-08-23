export interface Property {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: {
    url: string;
    caption: string;
    imageType: string;
  };
  rating: {
    ratingValue: number;
    ratingType: string;
  };
}

export interface Offer {
  promotion: {
    title: string;
    type: string;
  };
  name: string;
  displayPrice: {
    amount: number;
    currency: string;
  };
  savings: {
    amount: number;
    currency: string;
  } | null;
  cancellationOption: {
    cancellationType: string;
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
