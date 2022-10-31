import {render, screen} from "@testing-library/react"
import Login from "./Login"

it ('should have a username field, a password field and a submit button', () => {
    render(<Login/>)

    const username = screen.getByPlaceholderText(/username/i);
    const password = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByPlaceholderText(/submit/i);

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

}
);
it ('should allow the user to submit their credentials', () => {
    const submit = jest.fn();
    render(<Login submit={submit}/>)

    const username = screen.getByPlaceholderText(/username/i);
    const password = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByPlaceholderText(/submit/i);

    userEvent.type(username, "amanda");
    userEvent.type(password, "secure");
    userEvent.click(submitButton);

    expect(submit).toHaveBeenCalledWith({
        username: "amanda",
        password: "secure"
    });
});