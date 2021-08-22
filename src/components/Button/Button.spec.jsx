import { fireEvent, render, screen } from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import { Button } from ".";

describe('<Button />', () => {
    it('shout render the button with the text "Load mode"', () => {
        render(<Button text="Load more" />);

        expect.assertions(1);
        
        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
        
    });

    it('shout call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} />);
        
        const button = screen.getByRole('button', { name: /load more/i });
        
        fireEvent.click(button);
        userEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(2);
        
    });
});
