// Mounts the self-contained cooking recipe builder (public/cooking.html) full-bleed.
// The theme is passed via query param; changing it reloads the iframe with the new
// palette. Saved ingredients persist (same-origin localStorage), so the reload is safe.
function CookingTools({ theme = "dark" }) {
    return (
        <iframe
            title="cooking"
            src={process.env.PUBLIC_URL + "/cooking.html?theme=" + theme}
            style={{
                border: "none",
                display: "block",
                width: "100%",
                height: "calc(100vh - 42px)",
            }}
        />
    );
}

export default CookingTools;
