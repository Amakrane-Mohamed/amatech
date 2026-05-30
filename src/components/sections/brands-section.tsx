import { BrandLogoMark } from "@/components/sections/brand-logo";
import { brandLogos, brandsContent } from "@/lib/brands";

const logoVariants = [1, 2, 3, 4, 5] as const;

export function BrandsSection() {
  return (
    <section className="brands" aria-labelledby="brands-heading">
      <div className="brands-container">
        <p className="paragraph-02 subtitle brands-eyebrow">{brandsContent.eyebrow}</p>

        <div className="brands-main-wrap">
          <div className="brands-marquee-wrap">
            <div className="brands-marquee-track">
              {[0, 1].map((set) => (
                <ul key={set} className="brands-list" aria-hidden={set === 1 ? true : undefined}>
                  {brandLogos.map((brand, index) => (
                    <li key={`${set}-${brand.id}`}>
                      <BrandLogoMark
                        variant={logoVariants[index % logoVariants.length]}
                        name={brand.name}
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <div className="brands-left-shadow" aria-hidden />
            <div className="brands-right-shadow" aria-hidden />
          </div>
        </div>

        <h2 id="brands-heading" className="brands-heading">
          Supported by many companies
          <br />
          around the world
        </h2>
      </div>
    </section>
  );
}
