## CountryExplorer

CountryExplorer is a React application that allows users to search for countries and filter them by region. The application features a dark mode/light mode toggle, making it user-friendly and visually appealing.

## Features

- Search for countries by name.
- Filter countries by region (Africa, Americas, Antarctica, Asia, Europe, Oceania).
- Toggle between dark mode and light mode.
- Responsive design for a seamless user experience.

## Technologies Used

- React
- Axios for API calls
- Tailwind CSS (for styling)
- REST Countries API for country data

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Bhavishya2601/CountryExplorer.git
   cd CountryExplorer
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed. Then, run:

   ```bash
   npm install
   ```

3. **Run the application:**

   Start the development server with:

   ```bash
   npm run dev
   ```

   This will open the application in your default web browser at `http://localhost:5173`.

## Usage

- Use the search input to find a country by name.
- Use the dropdown menu to filter countries by region.
- Click on the "Light Mode" / "Dark Mode" button in the navbar to toggle themes.

## Folder Structure

```
/CountryExplorer
|-- /src
|   |-- /components
|   |   |-- Card.jsx
|   |   |-- Countries.jsx
|   |   |-- Filter.jsx
|   |   |-- Navbar.jsx
|   |-- App.jsx
|   |-- main.jsx
|-- package.json
|-- README.md
```

## API Reference

The application uses the [REST Countries API](https://restcountries.com/) to fetch country data. The API provides information such as country names, capitals, regions, areas, populations, flags, and more.

## Contributing

If you want to contribute to this project, please fork the repository and create a new branch for your feature or bug fix. Then, create a pull request for review.


## Acknowledgments

- [React](https://reactjs.org/) for building the user interface.
- [Axios](https://axios-http.com/) for making HTTP requests.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [REST Countries API](https://restcountries.com/) for providing country data.
