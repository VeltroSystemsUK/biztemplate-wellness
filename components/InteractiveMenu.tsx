"use client";

import { useState, useEffect } from "react";
import staticConfig from "@/site.config";

type MenuItem = {
  name: string;
  price: string;
  description: string;
  category: string;
  tag?: string;
};

export default function InteractiveMenu() {
  const menuData = staticConfig.widgets?.interactiveMenu;

  // Hooks must be unconditional — called before the early return
  const [activeCategory, setActiveCategory] = useState(
    menuData?.categories[0] ?? "",
  );
  const [demoItems, setDemoItems] = useState<MenuItem[] | null>(null);

  useEffect(() => {
    // Pick up items pre-set by DemoEditor before this component mounted
    const pre = (window as any).__DEMO_MENU_ITEMS__;
    if (Array.isArray(pre) && pre.length > 0) {
      setDemoItems(pre);
      setActiveCategory(pre[0].category);
    }

    const handler = (e: Event) => {
      const items = (e as CustomEvent<MenuItem[]>).detail;
      if (Array.isArray(items) && items.length > 0) {
        setDemoItems(items);
        setActiveCategory(items[0].category);
      } else {
        setDemoItems(null);
      }
    };
    window.addEventListener("demo:menu-update", handler);
    return () => window.removeEventListener("demo:menu-update", handler);
  }, []);

  if (!menuData?.enabled) return null;

  const effectiveItems = demoItems ?? menuData.items;
  const effectiveCategories = demoItems
    ? [...new Set(demoItems.map((i) => i.category))].filter(Boolean)
    : menuData.categories;

  const visibleItems = effectiveItems.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <section data-demo-section="menu" className="section-pad bg-primary-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <p
            data-demo-edit="menu-label"
            className="text-accent-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            What We Offer
          </p>
          <h2
            data-demo-edit="menu-title"
            className="font-display font-black text-4xl md:text-5xl text-white"
          >
            {menuData.title}
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 bg-white/5 p-1.5 rounded-full max-w-2xl mx-auto">
          {effectiveCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent-500 text-white shadow-lg"
                  : "text-white/50 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-2 gap-4">
          {visibleItems.map((item) => (
            <div
              key={item.name}
              className="card-hover p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  data-demo-edit={`item-${item.name}`}
                  className="font-display font-bold text-white text-lg leading-snug"
                >
                  {item.name}
                </h3>
                <span
                  data-demo-edit={`item-${item.name}-price`}
                  className="shrink-0 text-accent-400 font-mono font-bold text-base bg-accent-400/10 px-3 py-1 rounded-lg border border-accent-400/20"
                >
                  {item.price}
                </span>
              </div>
              <p
                data-demo-edit={`item-${item.name}-desc`}
                className="text-white/60 text-sm leading-relaxed"
              >
                {item.description}
              </p>
              {item.tag && (
                <span
                  data-demo-edit={`item-${item.name}-tag`}
                  className="self-start text-[10px] tracking-wider uppercase font-bold bg-accent-500/20 text-accent-300 px-2.5 py-1 rounded-md border border-accent-400/30"
                >
                  {item.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
