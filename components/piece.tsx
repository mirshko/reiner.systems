import Image from "next/image";
import { Fragment } from "react";
import { Roles } from "../data";

type Props = {
  screenshot: StaticImageData;
  label: string;
  summary?: string;
  roles?: Roles[];
  href: string;
  website: string;
};

function PortfolioPiece({
  label,
  summary,
  roles,
  href,
  website,
  screenshot,
}: Props) {
  return (
    <article className="max-w-4xl">
      <div className="next-image-tweaks">
        <Image
          alt={label}
          className="rounded-md object-cover object-top align-middle"
          height={360}
          src={screenshot}
          placeholder="blur"
          title={label}
          width={576}
        />
      </div>

      <div className="h-5" />

      <header>
        <h2>
          {label}{" "}
          <a
            className="text-pink-dark"
            href={href}
            aria-label={`${label} Project Website`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {website}
          </a>
        </h2>
      </header>

      {(roles || summary) && (
        <Fragment>
          <div className="h-5" />

          <section>
            {roles && (
              <Fragment>
                <p className="leading-tight">{roles.join(", ")}</p>

                <div className="h-5" />
              </Fragment>
            )}

            {summary && <p className="leading-tight">{summary}</p>}
          </section>
        </Fragment>
      )}
    </article>
  );
}

export default PortfolioPiece;
