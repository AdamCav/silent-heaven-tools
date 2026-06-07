// Mounts the self-contained cooking recipe builder (public/cooking.html) full-bleed.
function CookingTools() {
    return (
        <iframe
            title="cooking"
            src={process.env.PUBLIC_URL + "/cooking.html"}
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
