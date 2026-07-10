"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCheck } from "react-icons/fa";
import { pricingPlans, pricingAddons, PricingPlan } from "@/data";

// ─── Accent colour maps ──────────────────────────────────────────────────────
// Maps the accentColor token from data to concrete Tailwind / CSS values so
// the component stays purely data-driven without string interpolation pitfalls.

const accentMap: Record<
  PricingPlan["accentColor"],
  {
    glow: string;        // box-shadow style string
    border: string;      // Tailwind border class
    badge: string;       // Tailwind bg + text for the "Most Popular" badge
    priceText: string;   // Tailwind text-color class for the price
    ctaBg: string;       // Tailwind bg gradient for CTA button
    checkColor: string;  // Tailwind text-color for check icons
    shimmer: string;     // shimmer gradient overlay
  }
> = {
  cyan: {
    glow: "0 0 40px 4px rgba(34,211,238,.20)",
    border: "border-cyan-500/30",
    badge: "bg-cyan-500/20 text-cyan-300",
    priceText: "text-cyan-400",
    ctaBg: "from-cyan-500 to-cyan-700",
    checkColor: "text-cyan-400",
    shimmer: "from-cyan-500/0 via-cyan-400/10 to-cyan-500/0",
  },
  violet: {
    glow: "0 0 60px 8px rgba(139,92,246,.30)",
    border: "border-violet-500/50",
    badge: "bg-violet-500/20 text-violet-300",
    priceText: "text-violet-400",
    ctaBg: "from-violet-500 to-fuchsia-600",
    checkColor: "text-violet-400",
    shimmer: "from-violet-500/0 via-violet-400/15 to-violet-500/0",
  },
  fuchsia: {
    glow: "0 0 40px 4px rgba(217,70,239,.20)",
    border: "border-fuchsia-500/30",
    badge: "bg-fuchsia-500/20 text-fuchsia-300",
    priceText: "text-fuchsia-400",
    ctaBg: "from-fuchsia-500 to-pink-600",
    checkColor: "text-fuchsia-400",
    shimmer: "from-fuchsia-500/0 via-fuchsia-400/10 to-fuchsia-500/0",
  },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

/** A single pricing card */
const PricingCard = ({ plan, index }: { plan: PricingPlan; index: number }) => {
  const accent = accentMap[plan.accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`
        relative flex flex-col rounded-2xl p-[1px] overflow-hidden
        ${plan.featured ? "scale-105 z-10" : ""}
      `}
      style={{ boxShadow: plan.featured ? accent.glow : "none" }}
    >
      {/* Gradient border wrapper */}
      <div
        className={`
          absolute inset-0 rounded-2xl
          ${plan.featured
            ? "bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-700"
            : `border ${accent.border} bg-transparent`
          }
        `}
      />

      {/* Card body */}
      <div className="relative flex flex-col flex-1 rounded-2xl bg-black-100 p-7 gap-5 overflow-hidden">
        {/* Shimmer hover overlay */}
        <div
          aria-hidden
          className={`
            pointer-events-none absolute inset-0 -translate-x-full
            bg-gradient-to-r ${accent.shimmer}
            transition-transform duration-700 group-hover:translate-x-full
          `}
        />

        {/* Badge */}
        {plan.badge && (
          <span
            className={`
              self-start px-3 py-1 text-xs font-semibold rounded-full tracking-wider
              ${accent.badge}
            `}
          >
            ✦ {plan.badge}
          </span>
        )}

        {/* Plan name */}
        <h3 className="text-xl font-bold text-white">{plan.name}</h3>

        {/* Price block */}
        <div className="flex flex-col gap-1">
          {plan.originalPrice && (
            <span className="text-white-100 text-sm line-through">
              {plan.originalPrice}
            </span>
          )}
          <span className={`text-4xl font-extrabold tracking-tight ${accent.priceText}`}>
            {plan.price}
          </span>
          <p className="text-white-200 text-sm mt-1">{plan.subtitle}</p>
        </div>

        {/* Divider */}
        <hr className="border-white/10" />

        {/* Feature list */}
        <ul className="flex flex-col gap-3 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheck
                className={`mt-[3px] shrink-0 text-xs ${accent.checkColor}`}
              />
              <div className="flex flex-col">
                <span className="text-white-100 text-xs font-semibold uppercase tracking-wide">
                  {feature.label}
                </span>
                <span className="text-white-200 text-sm">{feature.value}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={plan.ctaHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`${plan.ctaLabel} for ${plan.name} package`}
          className={`
            relative mt-2 inline-flex items-center justify-center gap-2
            rounded-xl px-6 py-3 font-semibold text-white text-sm
            bg-gradient-to-r ${accent.ctaBg}
            hover:brightness-110 active:scale-95
            transition-all duration-200 overflow-hidden
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
          `}
        >
          <FaWhatsapp className="text-base" />
          {plan.ctaLabel}
        </a>
      </div>
    </motion.div>
  );
};

/** A single add-on card in the bottom strip */
const AddonCard = ({
  addon,
  index,
}: {
  addon: (typeof pricingAddons)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="
      flex flex-col gap-3 rounded-xl border border-white/10
      bg-black-200 p-5 backdrop-blur-sm
      hover:border-cyan-500/30 hover:bg-black-100
      transition-all duration-300
    "
  >
    <span className="text-2xl" aria-hidden>
      {addon.icon}
    </span>
    <h4 className="text-white font-semibold text-sm">{addon.title}</h4>
    <p className="text-white-200 text-xs flex-1">{addon.description}</p>
    <span className="text-cyan-400 text-xs font-bold">{addon.price}</span>
  </motion.div>
);

// ─── Main Section ────────────────────────────────────────────────────────────

const Pricing = () => {
  return (
    <section className="w-full py-20" id="pricing" aria-labelledby="pricing-heading">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
      >
        <h1 id="pricing-heading" className="heading">
          Pricing{" "}
          <span className="text-cyan-400">Plans</span>
        </h1>
        <p className="text-white-200 mt-4 max-w-xl mx-auto text-sm md:text-base px-4">
          Professional websites for your business — hassle-free, transparent pricing.
          Choose the package that suits your needs.
        </p>
      </motion.div>

      {/* Pricing cards grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-end px-4 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={plan.id} plan={plan} index={index} />
        ))}
      </div>

      {/* Add-ons section */}
      <div className="mt-20 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-white">
            Optional{" "}
            <span className="text-violet-400">Add-ons</span>
          </h2>
          <p className="text-white-200 text-sm mt-2">
            Extra services outside the package — customize to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pricingAddons.map((addon, index) => (
            <AddonCard key={addon.id} addon={addon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
