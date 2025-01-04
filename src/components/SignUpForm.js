import "./SignUpFormStyles.css";

function SignUpForm() {
    return(
        <div className="form-container">
            <h1>Sign Up for a trip!</h1>
            <form>
                <input placeholder="Date"/>
                <input placeholder="Trip"/>
                <textarea placeholder="Notes" rows="4"></textarea>
                <button>Send Messsage</button>
            </form>
        </div>
    );
}

export default SignUpForm;