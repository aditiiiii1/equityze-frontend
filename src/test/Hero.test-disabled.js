import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';
import { MemoryRouter } from 'react-router-dom';

describe('Hero component', () => {
    test('renders hero image', () => {
        render(
            <MemoryRouter>
            <Hero />
        </MemoryRouter>
        );

        const heroImage = screen.getByAltText("Invest in stocks, derivatives, mutual funds");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png")
    })
});