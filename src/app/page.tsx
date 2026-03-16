"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Award, MessageCircle, Shield, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSizeMediumTitles"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="ProTint Pueblo"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Quote",            href: "#contact"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Premium Window Tinting in Pueblo, CO"
          description="Professional auto window tinting and windshield repair services. Best prices guaranteed. Protect your vehicle with quality tinting and expert repair work."
          tag="Pueblo's Trusted Tinting Expert"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "animated-grid" }}
          buttons={[
            { text: "Schedule Service", href: "#contact" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/panning-shot-cars-with-sleek-design-showroom-waiting-be-purchased_482257-124026.jpg"
          imageAlt="professional car window tinting service vehicle"
          mediaAnimation="blur-reveal"
          imagePosition="right"
          fixedMediaHeight={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About ProTint Pueblo"
          tagIcon={Shield}
          tagAnimation="slide-up"
          title="Quality Window Tinting & Windshield Repair You Can Trust"
          useInvertedBackground={false}
          buttons={[
            { text: "View Our Services", href: "#features" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Our Services"
          description="Expert auto tinting and windshield repair services designed to protect your vehicle and enhance its appearance."
          tag="Premium Services"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: 1,
              title: "Full Auto Window Tinting",              description: "Professional quality tinting for all vehicle windows. UV protection, privacy, and heat reduction in one service.",              imageSrc: "http://img.b2bpic.net/free-photo/spoiler-car-roof-close-up-photo_1303-31688.jpg",              imageAlt: "window tinting application auto glass professional"
            },
            {
              id: 2,
              title: "Windshield Repair",              description: "Expert windshield damage repair and replacement. Quick service to get you back on the road safely.",              imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-mechanic-examining-vehicle-hood-while-working-auto-repair-shop_637285-7664.jpg",              imageAlt: "windshield repair glass replacement auto shop"
            },
            {
              id: 3,
              title: "Best Prices Guaranteed",              description: "Competitive pricing without compromising quality. We beat any legitimate quote in the Pueblo area.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-salesman-car-dealership_23-2148130098.jpg",              imageAlt: "affordable pricing best deal car service"
            }
          ]}
          buttons={[
            { text: "Schedule Now", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Why Choose ProTint Pueblo"
          description="Proven expertise and customer satisfaction metrics that demonstrate our commitment to quality service."
          tag="Our Track Record"
          tagIcon={Award}
          tagAnimation="slide-up"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
          metrics={[
            { id: "1", value: "500+", description: "Vehicles Tinted" },
            { id: "2", value: "4.9★", description: "Average Rating" },
            { id: "3", value: "10+ Yrs", description: "Industry Experience" },
            { id: "4", value: "100%", description: "Satisfaction Guarantee" }
          ]}
          buttons={[
            { text: "Get Your Quote Today", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Ready to Protect Your Vehicle?"
          title="Get Your Free Quote Today"
          description="Contact ProTint Pueblo for professional window tinting and windshield repair. We offer competitive pricing and expert service in Pueblo, CO."
          tagIcon={MessageCircle}
          tagAnimation="slide-up"
          background={{ variant: "animated-grid" }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/worker-follows-car-checklist-fixing-tires_482257-75661.jpg"
          imageAlt="professional auto service team in uniform shop"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          inputPlaceholder="Enter your email or phone"
          buttonText="Get Quote"
          termsText="By submitting this form, you agree to be contacted about your tinting service request."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",              items: [
                { label: "Auto Window Tinting", href: "#features" },
                { label: "Windshield Repair", href: "#features" },
                { label: "Pricing", href: "#metrics" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Pueblo, CO", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Warranty", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 ProTint Pueblo. All rights reserved. Professional window tinting and windshield repair in Pueblo, CO."
        />
      </div>
    </ThemeProvider>
  );
}