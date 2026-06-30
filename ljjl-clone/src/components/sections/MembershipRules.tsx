import Link from "next/link";

export default function MembershipRules() {
  return (
    <section className="bg-[#ebebeb] py-16 lg:py-24" id="membership-rules-page">
      <div className="container-ljjl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="mb-4 lg:mb-0">
            <Link href="/athletes/become-a-member" className="block no-underline group">
              <div className="overflow-hidden">
                <img
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1583473848882-f10222726f3d?w=600&q=80"
                  alt="Membership"
                />
              </div>
              <h3 className="text-[#07162e] uppercase text-xl font-bold mt-4 mb-2">
                Membership
              </h3>
              <div className="text-[#555] text-sm">
                The athletes registered with LJJL will have their graduation recognized by an official
                sport organization.
              </div>
            </Link>
          </div>
          <div>
            <Link href="/books-videos" className="block no-underline group">
              <div className="overflow-hidden">
                <img
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80"
                  alt="Rules"
                />
              </div>
              <h3 className="text-[#07162e] uppercase text-xl font-bold mt-4 mb-2">Rules</h3>
              <div className="text-[#555] text-sm">
                Download the LJJL Rule Book (V1.0).
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
