// Mounts the self-contained chemistry command builder (public/chemistry.html) full-bleed.
// The theme is passed via query param; changing it reloads the iframe with the new
// palette. Saved recipes persist (same-origin localStorage), so the reload is safe.
function ChemistryTools({ theme = "dark" }) {
    return (
        <iframe
            title="chemistry"
            src={process.env.PUBLIC_URL + "/chemistry.html?theme=" + theme}
            style={{
                border: "none",
                display: "block",
                width: "100%",
                height: "calc(100vh - 42px)",
            }}
        />
    );
}

export default ChemistryTools;
