// FAQ content, carried over from the old FAQ page. The order answer now has the real numbers
// instead of "+233 XX XXX XXXX". Lines starting with "- " or "1. " render as lists.

export type FaqCategory = { id: string; label: string; questions: { q: string; a: string }[] };

export const faqCategories: FaqCategory[] = [
  {
    id: "buyers",
    label: "Buying feed",
    questions: [
      {
        q: "Is BSF feed safe for my animals?",
        a: "Absolutely. Black Soldier Fly larvae are widely recognized as safe and nutritious feed for poultry, fish, and livestock globally. BSF protein is rich in essential amino acids, calcium, and lauric acid, which supports animal health and immune function. Our products are processed under hygienic conditions following Ghana FDA guidelines."
      },
      {
        q: "How does protein content compare to fishmeal and soybean?",
        a: "Our dried BSF larvae contain 42-45% crude protein, which is comparable to soybean meal (44-48%) and while lower than premium fishmeal (60-65%), the amino acid profile is excellent for poultry and aquaculture. Many farmers find BSF to be more cost-effective per unit of usable protein."
      },
      {
        q: "What animals can eat BSF larvae?",
        a: "BSF larvae are suitable for:\n- Poultry (chickens, ducks, turkeys)\n- Fish (tilapia, catfish, ornamental fish)\n- Pigs and piglets\n- Reptiles and amphibians\n- Pet birds and small mammals\n- Some livestock as a protein supplement"
      },
      {
        q: "Will my animals actually eat them?",
        a: "Yes! Animals naturally love BSF larvae. The high fat content and natural flavor make them highly palatable. Most farmers report improved feed acceptance and eating behavior."
      },
      {
        q: "What's the shelf life of dried larvae?",
        a: "When stored properly in a cool, dry place away from direct sunlight, our dried BSF larvae have a shelf life of 12 months. We recommend airtight containers to maintain freshness."
      },
      {
        q: "How should I store the product?",
        a: "Store in a cool, dry location (below 25°C) in the original packaging or an airtight container. Keep away from moisture and direct sunlight. Refrigeration is not necessary but can extend shelf life."
      },
      {
        q: "How much should I feed my animals?",
        a: "Feeding recommendations:\n- Poultry: 5-15% of total feed (mix with regular feed)\n- Fish: 10-30% of total diet\n- Pigs: 5-10% as protein supplement\nStart with smaller amounts and gradually increase. Contact us for species-specific feeding guides."
      },
      {
        q: "Can I get a sample before buying in bulk?",
        a: "Yes! We offer 1kg sample packs for ₵25. Contact us to arrange sample delivery or pickup."
      },
      {
        q: "Do you offer bulk discounts?",
        a: "Yes, we offer tiered pricing:\n- 5-24kg: Standard rate\n- 25-99kg: 10% discount\n- 100kg+: 15% discount\n- 500kg+: Custom pricing (contact us)"
      }
    ]
  },
  {
    id: "farmers",
    label: "Starting a BSF farm",
    questions: [
      {
        q: "How much space do I need to start BSF farming?",
        a: "You can start small with as little as 10 square meters (about 100 sq ft). A typical backyard setup of 20-30 square meters can produce 10-20kg of larvae per week. Commercial operations typically need 100+ square meters."
      },
      {
        q: "What's the total startup cost?",
        a: "Startup costs vary by scale:\n- Micro setup (home/backyard): ₵2,000-₵5,000\n- Small-scale (side business): ₵10,000-₵25,000\n- Commercial operation: ₵50,000+\n\nOur training packages include starter colonies and equipment to help reduce initial costs."
      },
      {
        q: "How long until I see returns on my investment?",
        a: "BSF have a 14-day lifecycle, so you can start producing saleable larvae within 4-6 weeks of setup. Most graduates reach break-even within 3-4 months and profitability within 6 months, depending on scale and market development."
      },
      {
        q: "Is there really a market for BSF products in Ghana?",
        a: "Absolutely! Market demand includes:\n- Poultry farmers (large and small-scale)\n- Fish farms (growing aquaculture sector)\n- Pet stores and exotic pet owners\n- Reptile and bird breeders\n- Organic fertilizer market\n- Other BSF farmers needing colonies\n\nWith rising imported feed costs, demand continues to grow faster than supply."
      },
      {
        q: "What are the ongoing operational costs?",
        a: "Main ongoing costs:\n- Waste substrate: Often free from partner sources (breweries, markets)\n- Utilities: Minimal (mainly water)\n- Labor: Part-time for small operations\n- Packaging materials: ₵500-₵2,000/month\n- Maintenance: Minimal\n\nMost costs are variable based on production volume."
      },
      {
        q: "Can I do this part-time or does it require full-time commitment?",
        a: "Small-scale BSF farming can absolutely be done part-time (2-3 hours daily). The larvae are relatively low-maintenance. Many successful farmers started part-time and scaled up as demand grew."
      },
      {
        q: "Do I need special permits or licenses?",
        a: "BSF farming is legal in Ghana. Recommended registrations:\n- Business registration (Registrar General's Department)\n- Basic business operating permit (local assembly)\n- If selling feed commercially: Ghana Standards Authority awareness\nWe guide trainees through registration requirements."
      },
      {
        q: "What if I can't find waste substrate locally?",
        a: "We teach you how to identify and source waste in your area. Options include:\n- Local markets (vegetable scraps)\n- Breweries (spent grain)\n- Food processors\n- Restaurants/hotels\n- Your own household organic waste\n- Maize bran/wheat bran (purchased if needed)"
      },
      {
        q: "What are common mistakes beginners make?",
        a: "Common mistakes we help trainees avoid:\n- Overfeeding or underfeeding larvae\n- Poor moisture management\n- Inadequate temperature control\n- Not separating larvae by age\n- Rushing to scale before mastering basics\nOur training addresses all these issues with hands-on practice."
      }
    ]
  },
  {
    id: "training",
    label: "Training",
    questions: [
      {
        q: "What's included in the training?",
        a: "All training packages include:\n- Comprehensive BSF biology education\n- Hands-on practical demonstrations\n- Breeding and harvesting techniques\n- Waste substrate preparation\n- Business and marketing guidance\n- Digital resource materials\n- Starter colony to begin production\n- Certificate of completion\n\nProfessional package adds: Custom consultation, extended support, and full equipment kit."
      },
      {
        q: "Where is the training held?",
        a: "Training takes place at our facility in Greater Accra. This allows hands-on experience with actual BSF operations. We're exploring online training options for distant participants."
      },
      {
        q: "How many people can attend one session?",
        a: "To ensure quality and individual attention:\n- Basic: Max 8 participants\n- Professional: Max 5 participants\n- Corporate: Customized for your group size"
      },
      {
        q: "Can I bring someone with me to training?",
        a: "Yes! Each additional person is ₵200 for Basic package or ₵400 for Professional package. Family members involved in your farm should attend together."
      },
      {
        q: "Do you offer payment plans for training?",
        a: "Yes, we offer installment options:\n- 50% deposit to secure booking\n- Balance payable before training date\nContact us to discuss flexible payment arrangements."
      },
      {
        q: "What if I need help after training?",
        a: "Professional package includes 30 days of post-training support via WhatsApp/phone. All trainees can:\n- Join our graduate community (WhatsApp group)\n- Purchase additional consultation hours\n- Attend refresher sessions (discounted)\n- Access our online resource library"
      },
      {
        q: "Do you offer advanced training for scaling up?",
        a: "Yes! We offer advanced modules:\n- Scaling to commercial production\n- Automation and efficiency optimization\n- Quality control and product development\n- B2B sales and distribution\nContact us for advanced training schedules."
      }
    ]
  },
  {
    id: "general",
    label: "General",
    questions: [
      {
        q: "Where does your organic waste come from?",
        a: "We partner with verified, quality sources:\n- Local breweries (spent grain)\n- Wholesale fruit/vegetable markets\n- Food processing facilities\n- Agricultural cooperatives\nAll waste is inspected for quality and safety before use."
      },
      {
        q: "Are BSF farms smelly or attract pests?",
        a: "When properly managed, BSF farms have minimal odor, often less than traditional composting. BSF larvae actually reduce odors from organic waste. They also naturally deter common pests like houseflies through competitive exclusion and antimicrobial properties."
      },
      {
        q: "What makes your operation sustainable?",
        a: "Our sustainability impact:\n- Diverts tons of organic waste from landfills monthly\n- Reduces methane emissions from decomposing waste\n- Decreases Ghana's dependence on imported feed (lower carbon footprint)\n- Creates local employment\n- Produces zero waste (larvae excrement becomes fertilizer)\n- Conserves marine resources (reduces fishmeal demand)"
      },
      {
        q: "Are BSF the same as common houseflies?",
        a: "No! Black Soldier Flies are completely different:\n- Different species (Hermetia illucens)\n- Don't enter homes or land on food\n- Adult flies don't have functional mouthparts (can't eat or spread disease)\n- Short adult lifespan (5-8 days, only for mating)\n- Beneficial insects, not pests"
      },
      {
        q: "How does BSF frass compare to chemical fertilizer?",
        a: "BSF frass offers advantages:\n- Organic and chemical-free\n- Improves soil structure and microbiology\n- Slow-release nutrients (less runoff)\n- Enhances water retention\n- Safe for organic certification\n- Contains beneficial microbes\nNPK values vary by substrate but typically 2-3% N, 1-2% P, 1-2% K."
      },
      {
        q: "Can BSF survive in Ghana's climate?",
        a: "BSF thrive in Ghana's warm, tropical climate! Optimal temperature is 27-30°C, which we have year-round. This makes Ghana ideal for BSF farming compared to temperate countries requiring heating systems."
      }
    ]
  },
  {
    id: "orders",
    label: "Orders and delivery",
    questions: [
      {
        q: "How do I place an order?",
        a: "Three easy ways:\n1. WhatsApp: 055 694 3631 (fastest response)\n2. Phone: 055 694 3631 or 055 694 3630, during business hours\n3. Website: send us a message from the Contact page\nWe'll confirm availability, pricing, and delivery details."
      },
      {
        q: "What's your minimum order quantity?",
        a: "Minimum orders:\n- Dried larvae: 5kg\n- Live larvae: 2kg\n- Starter colonies: Available in set sizes\n- Frass fertilizer: 10kg (when available)"
      },
      {
        q: "Do you deliver or is it pickup only?",
        a: "We offer both:\n- Delivery: Available within Greater Accra and surrounding regions. Fees vary by location and order size.\n- Pickup: Free pickup from our facility during business hours (call ahead to confirm availability)"
      },
      {
        q: "How long does delivery take?",
        a: "Delivery timeframes:\n- Greater Accra: 1-2 business days\n- Other regions: 2-4 business days\n- Bulk orders: Schedule with us (sometimes same-day available)"
      },
      {
        q: "What are delivery costs?",
        a: "Delivery fees:\n- Within 10km: Free for orders 25kg+\n- Within Greater Accra: ₵20-₵50 depending on distance\n- Outside Accra: Calculated based on location\n- Bulk orders (100kg+): Delivery included"
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept:\n- Mobile Money (MTN, Vodafone, AirtelTigo)\n- Bank transfer/deposit\n- Cash (pickup orders only)\n- Installment plans for bulk orders (approved customers)"
      },
      {
        q: "What's your return/refund policy?",
        a: "We stand behind our quality:\n- Products damaged during delivery: Full refund or replacement\n- Quality issues: Report within 48 hours with photos for resolution\n- Change of mind: Contact us within 24 hours; return unopened products for refund (delivery fees non-refundable)"
      },
      {
        q: "Can I get a receipt/invoice?",
        a: "Yes! All customers receive:\n- Digital receipt via WhatsApp/email\n- Formal invoice for bulk orders\n- Tax-compliant documentation for business purchases"
      },
      {
        q: "Do you ship outside Ghana?",
        a: "Currently we serve Ghana only. We're exploring export options for neighboring West African countries. Contact us if you're interested in international orders."
      }
    ]
  }
];
