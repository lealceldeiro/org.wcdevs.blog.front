import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

describe('Home', () => {
    it('renders home page', () => {

        const mockSession: Session = {
            expires: "1",
            user: { email: "a", name: "Delta", image: "c" },
        };

        render(
            <SessionProvider session={mockSession}>
                <Home posts={[]} />
            </SessionProvider>
        )

        const PostsLink = screen.getByText('Posts')

        expect(PostsLink).toBeInTheDocument()
    })
})