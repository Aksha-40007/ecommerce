// Constants for filter values
const HEADPHONE_TYPES = ['In-ear headphone', 'On-ear headphone', 'Over-ear headphone'];
const COMPANIES = ['JBL', 'Sony', 'Boat', 'Zebronics', 'Marshall', 'Ptron'];
const COLORS = ['Blue', 'Black', 'White', 'Brown'];
const PRICE_RANGES = [
    { label: '0-1000', min: 0, max: 1000 },
    { label: '1000-10000', min: 1000, max: 10000 },
    { label: '10000-20000', min: 10000, max: 20000 }
];

module.exports = {
    HEADPHONE_TYPES,
    COMPANIES,
    COLORS,
    PRICE_RANGES
};
