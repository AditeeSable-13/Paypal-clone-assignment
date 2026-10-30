function AccountToggle() {
  return (
    <div className="account-toggle" role="group" aria-label="Account type">
      <button className="toggle-option" type="button">
        Personal
      </button>
      <button className="toggle-option toggle-active" type="button">
        Business
      </button>
    </div>
  );
}

export default AccountToggle;
