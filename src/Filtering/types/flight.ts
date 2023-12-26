export type IAirline = 'Homa' | 'Mahan' | 'IranAir' | 'Aseman' | 'Emirates';

export type IFlight = {
    id: string | number,
    airline: IAirline,
    price: number,
    flightTime: string
}