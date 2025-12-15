import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, ArrowRight, BarChart3, Clock, Shield } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Navigation } from "@/components/Navigation";

// --- Helper Components for Structure ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-10 tracking-tight">
    {children}
  </h2>
);

const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-center">
    {children}
  </p>
);

// --- Chart Placeholders (Section 6) ---

const ChartPlaceholder = ({ title, description, icon: Icon }: { title: string, description: string, icon: React.ElementType }) => (
  <div className="p-6 border rounded-lg shadow-sm bg-card/50 h-full flex flex-col">
    <div className="flex items-center space-x-3 mb-4">
      <Icon className="w-6 h-6 text-accent" />
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-muted-foreground text-sm flex-grow">{description}</p>
    <div className="mt-4 h-32 bg-gray-100 dark:bg-gray-800 rounded border border-dashed flex items-center justify-center text-sm text-gray-500">
      [Professional Financial Chart Visualization]
    </div>
  </div>
);


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="container mx-auto px-4 md:px-8 py-16 space-y-24 md:space-y-32">
        
        {/* 1. Hero Section */}
        <section className="text-center pt-10 pb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter max-w-5xl mx-auto leading-tight text-primary">
            Institutional Yield, Backed by Real Trade
          </h1>
          <p className="mt-6 text-2xl text-muted-foreground max-w-4xl mx-auto">
            Access short-duration, asset-backed yield derived from tokenized global trade receivables.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Button size="lg" className="h-12 px-8 text-lg bg-accent hover:bg-accent/90 text-white">
              Request Institutional Access <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg border-primary text-primary hover:bg-primary/10">
              Download Product Brief
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground font-medium">
            <span className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-green-600" /> Singapore-based
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-green-600" /> MAS-compliant structure
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-green-600" /> Permissioned access only
            </span>
          </div>
        </section>

        <Separator />

        {/* 2. Problem Statement (Institutional Context) */}
        <section id="problem" className="text-center">
          <SectionTitle>The Challenge of Institutional Fixed Income</SectionTitle>
          <SectionSubtitle>
            Traditional fixed income markets offer limited opportunities for short-duration, high-quality yield without taking on excessive duration or liquidity risk.
          </SectionSubtitle>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Low Yield Environment</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-accent" /> Bank deposits and short-term treasuries often fail to meet target returns.</li>
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-accent" /> Inflation erodes real returns on conservative capital allocations.</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Duration & Liquidity Risk</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-accent" /> Achieving higher yield typically requires locking up capital for years.</li>
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-accent" /> Private credit markets are opaque and lack standardized exit mechanisms.</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Inaccessible Trade Finance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-accent" /> Trade finance is a robust asset class but historically reserved for large banks.</li>
                <li className="flex items-start"><ArrowRight className="w-4 h-4 mt-1 mr-2 flex-shrink-0 text-accent" /> High operational overhead prevents direct institutional participation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Solventis Solution Overview */}
        <section id="solution" className="text-center">
          <SectionTitle>Solventis: Tokenizing Institutional Trade Finance</SectionTitle>
          <SectionSubtitle>
            Solventis bridges institutional capital with high-quality, short-duration trade receivables using a compliant, permissioned tokenization framework.
          </SectionSubtitle>

          <div className="max-w-4xl mx-auto text-left space-y-6">
            <div className="p-6 border rounded-lg bg-primary/5">
              <h3 className="text-2xl font-semibold mb-3 text-primary">Core Positioning</h3>
              <p className="text-lg text-foreground">
                Solventis is a **permissioned platform** for institutional investors seeking stable, asset-backed yield. We provide structured access to the global trade finance market, minimizing operational friction through tokenization and stablecoin settlement.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-destructive">What Solventis is NOT</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Not a Decentralized Finance (DeFi) protocol.</li>
                <li>Not available to retail investors or the general public.</li>
                <li>Not based on speculative or volatile crypto assets.</li>
              </ul>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3 text-primary text-center">The Solventis Flow</h3>
              <div className="p-6 border rounded-lg bg-secondary/30 text-center font-mono text-sm md:text-base overflow-x-auto">
                <span className="whitespace-nowrap">
                  Institutions &rarr; Solventis Platform &rarr; Trade Receivables (SPV) &rarr; Yield Generation &rarr; Stablecoin Settlement
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How It Works (Mechanism – Step by Step) */}
        <section id="mechanism">
          <SectionTitle>Mechanism: A Structured Approach to RWA</SectionTitle>
          <SectionSubtitle>
            Our process ensures rigorous due diligence, legal clarity, and efficient settlement for every tokenized yield note.
          </SectionSubtitle>

          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "1. Asset Origination", description: "We source high-quality, investment-grade trade receivables (invoices) from established corporate counterparties globally." },
              { title: "2. Due Diligence & SPV Structuring", description: "Each asset undergoes comprehensive legal and financial review. Assets are segregated into bankruptcy-remote Special Purpose Vehicles (SPVs) in Singapore." },
              { title: "3. Tokenized Yield Note Issuance", description: "A digital security (Yield Note) representing the claim on the SPV assets is issued on a permissioned blockchain ledger." },
              { title: "4. Institutional Subscription", description: "Whitelisted institutions subscribe to the Yield Notes using stablecoins, providing immediate funding to the SPV." },
              { title: "5. Cash Flow & Settlement", description: "Upon invoice maturity (30–90 days), the principal and yield are automatically distributed back to the investor via stablecoin settlement." },
            ].map((step, index) => (
              <div key={index} className="relative p-4 border rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-extrabold text-accent mb-2">{index + 1}</div>
                <h4 className="font-semibold text-lg mb-1 text-primary">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < 4 && (
                  <ArrowRight className="absolute right-[-1.5rem] top-1/2 transform -translate-y-1/2 w-6 h-6 text-border hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 5. Product: Solventis Yield Notes */}
        <section id="product" className="text-center">
          <SectionTitle>Product Focus: Solventis Yield Notes</SectionTitle>
          <SectionSubtitle>
            A highly structured, short-duration product designed for treasury management and conservative capital deployment.
          </SectionSubtitle>

          <div className="max-w-3xl mx-auto">
            <Table className="border rounded-lg overflow-hidden">
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-white font-bold">Parameter</TableHead>
                  <TableHead className="text-white font-bold">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-primary">Asset Type</TableCell>
                  <TableCell>Trade receivables (verified corporate invoices)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-primary">Duration</TableCell>
                  <TableCell>30–90 days (short-term)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-primary">Yield (Target)</TableCell>
                  <TableCell>6–9% APR (Asset-backed)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-primary">Currency</TableCell>
                  <TableCell>SGD / USD denominated assets</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-primary">Collateral</TableCell>
                  <TableCell>Underlying invoice + enforceable legal claim against the debtor.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-primary">Structure</TableCell>
                  <TableCell>Bankruptcy-remote SPV (Singapore jurisdiction)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-primary">Investor Type</TableCell>
                  <TableCell>Whitelisted institutions only (KYC/KYB required)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* 6. Chart Section */}
        <section id="data" className="text-center">
          <SectionTitle>Data-Driven Allocation</SectionTitle>
          <SectionSubtitle>
            Visualizing the risk, duration, and yield profile of Solventis Yield Notes compared to traditional fixed income instruments.
          </SectionSubtitle>

          <div className="grid md:grid-cols-3 gap-8">
            <ChartPlaceholder
              title="Yield Comparison"
              icon={BarChart3}
              description="A bar chart illustrating the target yield of Solventis Yield Notes (6-9% APR) relative to conservative benchmarks like Singapore T-bills, investment-grade corporate bonds, and standard bank deposits."
            />
            <ChartPlaceholder
              title="Duration vs. Risk Profile"
              icon={Clock}
              description="A scatter plot positioning Solventis Yield Notes firmly in the low-risk, short-duration quadrant, highlighting capital efficiency compared to long-duration fixed income products."
            />
            <ChartPlaceholder
              title="Cash Flow Timeline"
              icon={Shield}
              description="A timeline chart showing the capital flow: Day 0 (Subscription), followed by the asset holding period (30-90 days), culminating in the automated settlement of Principal + Yield."
            />
          </div>
        </section>

        {/* 7. Compliance & Risk Management */}
        <section id="compliance" className="text-center">
          <SectionTitle>Compliance and Institutional Safeguards</SectionTitle>
          <SectionSubtitle>
            Our framework is built on regulatory adherence and robust risk mitigation, ensuring capital protection and legal enforceability.
          </SectionSubtitle>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Permissioned Access & Vetting</h3>
              <p className="text-muted-foreground">
                Access is strictly permissioned. All investors undergo rigorous institutional KYC (Know Your Customer) and KYB (Know Your Business) procedures before being whitelisted to participate.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Legal Enforceability</h3>
              <p className="text-muted-foreground">
                The underlying assets are held in bankruptcy-remote SPVs, providing investors with a direct, legally enforceable claim on the trade receivables under Singapore law.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Transfer Restrictions</h3>
              <p className="text-muted-foreground">
                Token transfers are restricted to other whitelisted institutional wallets, preventing unauthorized secondary market activity and maintaining regulatory control.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Asset-Level Due Diligence</h3>
              <p className="text-muted-foreground">
                We employ third-party verification and continuous monitoring of asset originators and debtors to ensure the quality and timely settlement of all underlying invoices.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Why Singapore */}
        <section id="singapore" className="text-center">
          <SectionTitle>Strategic Location: Singapore</SectionTitle>
          <SectionSubtitle>
            Operating from Singapore provides a foundation of regulatory clarity, financial stability, and unparalleled access to global trade flows.
          </SectionSubtitle>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h4 className="text-xl font-semibold mb-2 text-primary">Global Trade Hub</h4>
              <p className="text-muted-foreground">Singapore is a central node for ASEAN and global commerce, providing direct access to high-volume, high-quality trade finance opportunities.</p>
            </div>
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h4 className="text-xl font-semibold mb-2 text-primary">Regulatory Clarity</h4>
              <p className="text-muted-foreground">The Monetary Authority of Singapore (MAS) offers a clear, progressive regulatory environment for digital securities and asset tokenization.</p>
            </div>
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h4 className="text-xl font-semibold mb-2 text-primary">Institutional Capital Base</h4>
              <p className="text-muted-foreground">The jurisdiction hosts a deep pool of family offices, private banks, and asset managers, aligning with our institutional-only mandate.</p>
            </div>
          </div>
        </section>

        {/* 9. Solventis Stablecoin Layer */}
        <section id="stablecoin" className="text-center">
          <SectionTitle>Efficient Settlement via Stablecoins</SectionTitle>
          <SectionSubtitle>
            We utilize stablecoins exclusively for settlement, enhancing treasury efficiency and reducing counterparty risk compared to traditional banking rails.
          </SectionSubtitle>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h4 className="text-xl font-semibold mb-2 text-primary">Faster Settlement</h4>
              <p className="text-muted-foreground">Stablecoin rails enable near-instantaneous distribution of principal and yield upon asset maturity, eliminating T+2 or T+3 delays.</p>
            </div>
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h4 className="text-xl font-semibold mb-2 text-primary">Treasury Efficiency</h4>
              <p className="text-muted-foreground">Capital remains in a digital, readily deployable format, optimizing liquidity management for corporate treasuries and funds.</p>
            </div>
            <div className="p-6 border rounded-lg bg-card shadow-sm">
              <h4 className="text-xl font-semibold mb-2 text-primary">Reduced FX Friction</h4>
              <p className="text-muted-foreground">Settlement in major stablecoin denominations (e.g., USDC, potentially regulated SGD stablecoins) minimizes cross-border currency conversion costs.</p>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-500 italic">
            Note: The stablecoins used are fully asset-backed and regulated; Solventis does not utilize algorithmic or retail-facing stablecoin mechanisms.
          </p>
        </section>

        {/* 10. Target Clients (Institutional Only) */}
        <section id="clients" className="text-center">
          <SectionTitle>Target Clientele: Institutional Only</SectionTitle>
          <SectionSubtitle>
            Solventis is designed exclusively for sophisticated investors requiring compliant, high-quality RWA exposure.
          </SectionSubtitle>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              "Family Offices",
              "Corporate Treasuries",
              "Private Banks",
              "Asset Managers",
              "Institutional Crypto Funds",
            ].map((client) => (
              <div key={client} className="px-6 py-3 border border-accent text-accent font-medium rounded-full bg-accent/10">
                {client}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-destructive/10 border border-destructive/50 rounded-lg max-w-2xl mx-auto">
            <p className="font-semibold text-destructive">
              Disclaimer: Solventis products are not available to retail investors.
            </p>
          </div>
        </section>

        {/* 11. Call to Action (Final) */}
        <section className="text-center py-10">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Secure Your Access to Tokenized Trade Finance
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Begin the institutional onboarding process and receive our detailed investment memorandum.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="h-14 px-10 text-xl bg-primary hover:bg-primary/90 text-white">
              Request Institutional Access
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-xl border-accent text-accent hover:bg-accent/10">
              Speak with the Solventis Team
            </Button>
          </div>
        </section>
      </main>
      
      <MadeWithDyad />
    </div>
  );
}