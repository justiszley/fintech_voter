export interface IMeal {
    title: string;
    price: number;
    timeToCook: number;
}

export const MEALS: IMeal[] = [
    {
        title: 'Шаурма',
        price: 120,
        timeToCook: 30,
    },
    {
        title: 'Паста',
        price: 160,
        timeToCook: 40,
    },
    {
        title: 'Чизбургер',
        price: 59,
        timeToCook: 5,
    }
];
