export interface PropertiesLocation {
    status: string;
    code: number;
    neighborhood: string;
    alternative_code: number;
    bedroom: number;
    site_publish: boolean;
    property_type: string;
    vacation_rental: boolean;
    building_name: string;
    city: string;
    bathroom: number;
    area: number;
    zipcode: string;
    latitude: number;
    suite: number;
    stage: string;
    rental_value: number;
    member_register_code: string;
    building_parameters: {};
    db_id: string;
    id:number;
    description: string;
    cover_photo: {
      url: string;
      db_id: number;
    };
    finality: string;
    address: string;
    active: boolean;
    cover_photo_private: {
      url: string;
      db_id: number;
    };
    building: boolean;
    address_complement: string;
    country: string;
    created_at: string;
    property_situation: string;
    sale_value: number;
    longitude: number;
    listing_brokers: { db_id: string }[];
    garage: number;
    useful_area: number;
    key_id: string;
    site_publish_price: boolean;
    available_digital_real_estate: boolean;
}
  export interface PropertiesResult {
    count: number;
    cursor: string;
    properties: PropertiesLocation[];
}