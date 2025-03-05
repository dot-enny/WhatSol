export const PhoneNumberInput = () => {
    return (
      <input type="text" name="phone" placeholder="+1 (863) 293 2088"
        pattern="^\+1[\d\s]+$"
        title="Phone number must start with '+1' and be followed by digits and optional spaces"
        className="border border-[#D9D9D9] w-full p-3 rounded-[0.625rem] outline-0"
        required
      />
    )
  }