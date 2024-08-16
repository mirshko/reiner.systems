class LiteYTEmbed extends HTMLElement {
  private static preconnected = false;

  private _videoId!: string;
  private _videoTitle!: string;

  public get videoId(): string {
    return this._videoId;
  }
  public set videoId(value: string) {
    this._videoId = value;
  }

  public get videoTitle(): string {
    return this._videoTitle;
  }
  public set videoTitle(value: string) {
    this._videoTitle = value;
  }

  connectedCallback() {
    const dataId = this.getAttribute("data-id");

    if (!dataId) {
      throw new Error(`Missing 'data-id' attribute`);
    }

    this.videoId = dataId;

    const dataTitle = this.getAttribute("data-title");

    if (!dataTitle) {
      throw new Error(`Missing 'data-title' attribute`);
    }

    this.videoTitle = dataTitle;

    /**
     * Create Play Button
     */

    let playButton: HTMLButtonElement | null =
      this.querySelector(".play-button");

    if (!playButton) {
      playButton = document.createElement("button");
      playButton.type = "button";
      playButton.classList.add("play-button");

      this.append(playButton);
    }

    /**
     * Create Play Button A11y Content
     */

    if (!playButton.textContent) {
      const playButtonLabel = document.createElement("span");
      playButtonLabel.className = "sr-only";
      playButtonLabel.textContent = this.videoId;

      playButton.append(playButtonLabel);
    }

    /**
     * Warm Connections
     */
    this.addEventListener("pointerover", LiteYTEmbed.warmConnections, {
      once: true,
    });

    /**
     * Add iframe
     */
    this.addEventListener("click", this.addIframe);
  }

  private static addPrefetch(kind: string, url: string) {
    const link = document.createElement("link");
    link.rel = kind;
    link.href = url;
    document.head.append(link);
  }

  private static warmConnections() {
    if (LiteYTEmbed.preconnected) {
      return;
    }

    LiteYTEmbed.addPrefetch("preconnect", "https://www.youtube-nocookie.com");
    LiteYTEmbed.addPrefetch("preconnect", "https://www.google.com");

    LiteYTEmbed.preconnected = true;
  }

  public addIframe() {
    if (this.classList.contains("lyt-activated")) {
      return;
    }
    this.classList.add("lyt-activated");

    const iframe = document.createElement("iframe");
    iframe.width = "256";
    iframe.height = "256";
    iframe.title = this.videoTitle ?? "";
    iframe.allow =
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
      this.videoId
    )}?autoplay=1&controls=1&playsinline=1`;
    iframe.allowFullscreen = true;

    this.append(iframe);

    iframe.focus();
  }
}

customElements.define("lite-youtube", LiteYTEmbed);

export {};
