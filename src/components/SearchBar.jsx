export function SearchBar({ onSubmit, value }) {
  return (
    <>
      <div>
        <input
          value={value}
          onChange={(e) => {
            onSubmit(e.target.value);
          }}
          type="text"
          placeholder="insert country"
        />
      </div>
    </>
  );
}
