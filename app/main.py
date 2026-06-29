"""PathForge — AI Career Intelligence Platform.

Application entry point.
"""

# --- Application metadata -------------------------------------------------
# Centralizing constants like this means there's a single source of truth
# when other files (or a CLI --version flag) need this info later.
APP_NAME: str = "PathForge"
APP_VERSION: str = "0.1.0"


def main() -> None:
    """Run the PathForge application.

    This is the single, well-defined starting point for the program.
    As the app grows, this function will delegate to other modules
    instead of doing work itself.
    """
    print(f"Welcome to {APP_NAME} — your AI Career Intelligence Platform.")
    print(f"Version: {APP_VERSION}")


# --- Script guard -----------------------------------------------------------
# This ensures main() only runs when this file is executed directly
# (e.g. `python main.py`), not when it's imported as a module elsewhere.
if __name__ == "__main__":
    main()