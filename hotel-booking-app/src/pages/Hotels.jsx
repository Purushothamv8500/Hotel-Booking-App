import './Hotels.css';
import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaUtensils,
  FaParking,
  FaSwimmingPool,
} from 'react-icons/fa';

const hotels = [
  {
    name: 'Urbanza Suites',
    image: '/images/myhotel1.jpg',
    location: 'Downtown City Center',
    rating: 4.5,
    price: '$299',
    amenities: ['wifi', 'restaurant', 'parking'],
  },
  {
    name: 'Oceanview Palace',
    image: '/images/myhotel2.jpg',
    location: 'Beachside Avenue',
    rating: 4.7,
    price: '$399',
    amenities: ['wifi', 'swimming', 'restaurant'],
  },
  {
    name: 'Skyline Towers',
    image: '/images/myhotel3.jpg',
    location: 'Business District',
    rating: 4.3,
    price: '$249',
    amenities: ['wifi', 'parking'],
  },
  {
    name: 'Mountain Escape',
    image: '/images/myhotel4.jpg',
    location: 'Hilltop View',
    rating: 4.6,
    price: '$279',
    amenities: ['wifi', 'restaurant', 'swimming'],
  },
  {
    name: 'Palm Garden Resort',
    image: '/images/myhotel5.jpg',
    location: 'Tropical Paradise',
    rating: 4.8,
    price: '$459',
    amenities: ['wifi', 'parking', 'swimming'],
  },
  {
    name: 'The Royal Inn',
    image: '/images/myhotel6.jpg',
    location: 'City Center Plaza',
    rating: 4.2,
    price: '$219',
    amenities: ['wifi', 'restaurant'],
  },
  {
    name: 'Lakeside Haven',
    image: '/images/myhotel7.jpg',
    location: 'Serene Lakeview',
    rating: 4.4,
    price: '$329',
    amenities: ['wifi', 'parking', 'swimming'],
  },
  {
    name: 'Desert Pearl Hotel',
    image: '/images/myhotel8.jpg',
    location: 'Sandy Dunes',
    rating: 4.1,
    price: '$209',
    amenities: ['wifi', 'restaurant'],
  },
  {
    name: 'Forest Retreat Lodge',
    image: '/images/myhotel9.jpg',
    location: 'Greenwood Forest',
    rating: 4.9,
    price: '$499',
    amenities: ['wifi', 'restaurant', 'parking', 'swimming'],
  },
];

export default function Hotels() {
  return (
    <div className="hotels-page">
      <h2 className="hotels-title">Available Hotels</h2>
      <div className="hotels-grid">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>
                <FaMapMarkerAlt /> {hotel.location}
              </p>
              <p className="hotel-price">{hotel.price} / night</p>
              <p className="hotel-rating">
                <FaStar color="orange" /> {hotel.rating}
              </p>
              <div className="amenities">
                {hotel.amenities.includes('wifi') && <FaWifi title="Wi-Fi" />}
                {hotel.amenities.includes('restaurant') && <FaUtensils title="Restaurant" />}
                {hotel.amenities.includes('parking') && <FaParking title="Parking" />}
                {hotel.amenities.includes('swimming') && <FaSwimmingPool title="Pool" />}
              </div>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
