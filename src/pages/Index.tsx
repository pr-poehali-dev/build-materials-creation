import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const PHONE = '+79282708656';
const PHONE_FMT = '+7 928 270-86-56';
const EMAIL = 'osnovarnd@ya.ru';

const NAV = [
  { id: 'catalog', label: 'Каталог' },
  { id: 'calc', label: 'Калькулятор' },
  { id: 'services', label: 'Услуги' },
  { id: 'about', label: 'О компании' },
  { id: 'delivery', label: 'Доставка' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contacts', label: 'Контакты' },
];

const CATEGORIES = [
  { icon: 'PaintBucket', name: 'Краски и эмали', count: '320+ позиций', tag: 'ФИНИШ' },
  { icon: 'Wrench', name: 'Ручной инструмент', count: '540+ позиций', tag: 'РАБОТА' },
  { icon: 'Drill', name: 'Электроинструмент', count: '210+ позиций', tag: 'МОЩЬ' },
  { icon: 'Layers', name: 'Сухие смеси', count: '180+ позиций', tag: 'ОСНОВА' },
  { icon: 'Brush', name: 'Малярка и кисти', count: '260+ позиций', tag: 'ФИНИШ' },
  { icon: 'HardHat', name: 'Спецодежда и СИЗ', count: '95+ позиций', tag: 'ЗАЩИТА' },
];

const PRODUCTS = [
  { name: 'Краска водоэмульсионная супербелая', price: '890 ₽', unit: '/ 14 кг', cat: 'Краски' },
  { name: 'Грунтовка глубокого проникновения', price: '420 ₽', unit: '/ 10 л', cat: 'Основа' },
  { name: 'Шпаклёвка финишная полимерная', price: '650 ₽', unit: '/ 20 кг', cat: 'Смеси' },
  { name: 'Перфоратор SDS-plus 800 Вт', price: '6 490 ₽', unit: '/ шт', cat: 'Инструмент' },
  { name: 'Набор кистей флейцевых 5 шт', price: '340 ₽', unit: '/ набор', cat: 'Малярка' },
  { name: 'Эмаль ПФ-115 универсальная', price: '780 ₽', unit: '/ 2.7 кг', cat: 'Краски' },
];

const SERVICES = [
  { icon: 'Truck', title: 'Доставка по городу', text: 'Привезём заказ в день обращения по Ростову-на-Дону.' },
  { icon: 'Calculator', title: 'Расчёт материалов', text: 'Бесплатно посчитаем расход краски и смесей под ваш объект.' },
  { icon: 'PackageCheck', title: 'Подбор под задачу', text: 'Поможем выбрать инструмент и материалы под конкретный ремонт.' },
  { icon: 'Percent', title: 'Опт и для бригад', text: 'Специальные цены для строительных бригад и постоянных клиентов.' },
];

const FAQ = [
  { q: 'Как сделать заказ?', a: 'Позвоните по телефону или напишите на почту — менеджер оформит заказ и согласует доставку.' },
  { q: 'Доставляете ли за город?', a: 'Да, доставка возможна за пределы Ростова-на-Дону, стоимость рассчитывается индивидуально по километражу.' },
  { q: 'Можно ли вернуть товар?', a: 'Товар надлежащего качества можно вернуть в течение 14 дней при сохранении упаковки и товарного вида.' },
  { q: 'Работаете ли с бригадами оптом?', a: 'Да, для строительных бригад действуют специальные оптовые цены и условия. Уточняйте у менеджера.' },
];

const Index = () => {
  const [area, setArea] = useState('');
  const [coats, setCoats] = useState('2');
  const [consumption, setConsumption] = useState('0.15');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const a = parseFloat(area) || 0;
  const c = parseInt(coats) || 0;
  const cons = parseFloat(consumption) || 0;
  const totalKg = (a * c * cons).toFixed(1);
  const cans = Math.ceil((a * c * cons) / 14) || 0;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background border-b-2 border-secondary">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo('top')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary flex items-center justify-center -skew-x-12">
              <span className="font-display font-bold text-primary-foreground text-xl skew-x-12">А</span>
            </div>
            <span className="font-display font-bold text-xl md:text-2xl tracking-tight">
              СТРОЙ<span className="text-primary lowercase">о</span>СНОВА
            </span>
          </button>
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="font-display uppercase text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <a href={`tel:${PHONE}`} className="hidden sm:block">
            <Button className="font-display uppercase tracking-wide rounded-none">
              <Icon name="Phone" size={16} className="mr-2" /> {PHONE_FMT}
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative bg-secondary text-secondary-foreground diagonal-clip">
        <div className="absolute inset-0 grid-texture opacity-20" />
        <div className="container relative py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary px-3 py-1 mb-6">
              <Icon name="MapPin" size={14} />
              <span className="font-display uppercase text-xs tracking-widest">Ростов-на-Дону</span>
            </div>
            <p className="font-display uppercase tracking-[0.2em] text-accent text-sm md:text-base mb-3">
              Строительные материалы и инструмент
            </p>
            <h1 className="font-display font-bold uppercase leading-[0.92] text-5xl sm:text-6xl md:text-7xl mb-6">
              от <span className="text-primary">ОСНОВЫ</span><br />
              до <span className="text-accent">ФИНИША</span>
            </h1>
            <p className="text-lg text-secondary-foreground/70 max-w-md mb-8">
              Краски, ручной и электроинструмент, сухие смеси и всё для ремонта. Привезём в день заказа.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo('catalog')}
                className="font-display uppercase tracking-wide rounded-none text-base"
              >
                Смотреть каталог <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('calc')}
                className="font-display uppercase tracking-wide rounded-none text-base bg-transparent border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
              >
                <Icon name="Calculator" size={18} className="mr-2" /> Калькулятор
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary" />
            <img
              src="https://cdn.poehali.dev/files/6d5605d8-b434-4653-b46d-bb9606205486.png"
              alt="Витрина СТРОЙоСНОВА"
              className="relative w-full h-[280px] md:h-[420px] object-cover"
            />
            <div className="absolute -bottom-5 left-6 bg-accent text-accent-foreground px-5 py-2 font-display font-bold uppercase tracking-wide -skew-x-6">
              <span className="skew-x-6 inline-block">Всё для ремонта</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {['Краски', 'Инструмент', 'Сухие смеси', 'Электроинструмент', 'Малярка', 'Спецодежда', 'Доставка в день заказа'].map((t) => (
                <span key={t} className="font-display uppercase tracking-widest text-sm mx-6 flex items-center gap-6">
                  {t} <Icon name="Hammer" size={14} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CATALOG */}
      <section id="catalog" className="container py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-display uppercase tracking-[0.2em] text-primary text-sm mb-2">Каталог</p>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl">Категории товаров</h2>
          </div>
          <p className="text-muted-foreground max-w-xs">Более 1500 наименований материалов и инструмента в наличии.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              className="group bg-background p-7 text-left hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-primary flex items-center justify-center -skew-x-12 group-hover:bg-accent transition-colors">
                  <Icon name={cat.icon} size={24} className="text-primary-foreground skew-x-12 group-hover:text-accent-foreground" />
                </div>
                <span className="font-display uppercase text-[10px] tracking-widest text-muted-foreground group-hover:text-accent">{cat.tag}</span>
              </div>
              <h3 className="font-display font-semibold uppercase text-xl mb-1">{cat.name}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-secondary-foreground/60">{cat.count}</p>
            </button>
          ))}
        </div>

        {/* POPULAR PRODUCTS */}
        <h3 className="font-display font-bold uppercase text-3xl mt-16 mb-8">Популярные товары</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="border-2 border-secondary p-5 flex flex-col hover:border-primary transition-colors group">
              <span className="font-display uppercase text-[10px] tracking-widest text-primary mb-3">{p.cat}</span>
              <h4 className="font-semibold text-lg leading-snug mb-4 flex-1">{p.name}</h4>
              <div className="flex items-end justify-between">
                <p className="font-display font-bold text-2xl">{p.price}<span className="text-sm font-sans font-normal text-muted-foreground ml-1">{p.unit}</span></p>
                <a href={`tel:${PHONE}`}>
                  <Button size="sm" className="rounded-none font-display uppercase text-xs">В заказ</Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calc" className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display uppercase tracking-[0.2em] text-accent text-sm mb-2">Бесплатно</p>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mb-4">Калькулятор<br />расхода краски</h2>
            <p className="text-secondary-foreground/70 mb-8 max-w-md">
              Укажите площадь, число слоёв и расход на квадратный метр — посчитаем нужный объём материала.
            </p>
            <img
              src="https://cdn.poehali.dev/files/a7f5f1db-b090-45d0-83a3-c9cefcbf3204.jpg"
              alt="Инструмент"
              className="hidden lg:block w-full h-64 object-cover border-4 border-primary"
            />
          </div>

          <div className="bg-background text-foreground p-7 md:p-9 border-4 border-primary">
            <div className="space-y-6">
              <div>
                <label className="font-display uppercase text-sm tracking-wide block mb-2">Площадь поверхности, м²</label>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Например, 40"
                  className="w-full border-2 border-secondary px-4 py-3 font-display text-lg focus:border-primary outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-display uppercase text-sm tracking-wide block mb-2">Кол-во слоёв</label>
                  <select
                    value={coats}
                    onChange={(e) => setCoats(e.target.value)}
                    className="w-full border-2 border-secondary px-4 py-3 font-display text-lg focus:border-primary outline-none bg-background"
                  >
                    <option value="1">1 слой</option>
                    <option value="2">2 слоя</option>
                    <option value="3">3 слоя</option>
                  </select>
                </div>
                <div>
                  <label className="font-display uppercase text-sm tracking-wide block mb-2">Расход, кг/м²</label>
                  <select
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                    className="w-full border-2 border-secondary px-4 py-3 font-display text-lg focus:border-primary outline-none bg-background"
                  >
                    <option value="0.12">0.12 (краска)</option>
                    <option value="0.15">0.15 (стандарт)</option>
                    <option value="0.18">0.18 (фактура)</option>
                    <option value="1.2">1.2 (шпаклёвка)</option>
                  </select>
                </div>
              </div>

              <div className="bg-secondary text-secondary-foreground p-6 -skew-x-1">
                <div className="skew-x-1 flex items-center justify-between">
                  <div>
                    <p className="font-display uppercase text-xs tracking-widest text-accent mb-1">Понадобится</p>
                    <p className="font-display font-bold text-4xl">{totalKg} <span className="text-xl">кг</span></p>
                  </div>
                  <div className="text-right">
                    <p className="font-display uppercase text-xs tracking-widest text-secondary-foreground/60 mb-1">Вёдер по 14 кг</p>
                    <p className="font-display font-bold text-4xl text-primary">≈ {cans}</p>
                  </div>
                </div>
              </div>

              <a href={`tel:${PHONE}`} className="block">
                <Button className="w-full rounded-none font-display uppercase tracking-wide text-base" size="lg">
                  <Icon name="Phone" size={18} className="mr-2" /> Заказать материал
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container py-16 md:py-24">
        <p className="font-display uppercase tracking-[0.2em] text-primary text-sm mb-2">Услуги</p>
        <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mb-10">Чем поможем</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="border-2 border-secondary p-6 hover:bg-secondary hover:text-secondary-foreground transition-colors group">
              <div className="flex items-center justify-between mb-5">
                <Icon name={s.icon} size={32} className="text-primary" />
                <span className="font-display font-bold text-3xl text-border group-hover:text-secondary-foreground/20">0{i + 1}</span>
              </div>
              <h3 className="font-display font-semibold uppercase text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-secondary-foreground/60">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-muted py-16 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/files/7a285a6d-cd26-46e2-8d34-8798a4f4120e.jpg"
              alt="Мастер на объекте"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground p-6 hidden md:block">
              <p className="font-display font-bold text-4xl leading-none">1500+</p>
              <p className="font-display uppercase text-xs tracking-widest">товаров</p>
            </div>
          </div>
          <div>
            <p className="font-display uppercase tracking-[0.2em] text-primary text-sm mb-2">О компании</p>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mb-6">Ваша опора<br />в ремонте</h2>
            <p className="text-muted-foreground text-lg mb-6">
              «СТРОЙоСНОВА» — магазин строительных материалов и инструмента в Ростове-на-Дону. Мы собрали всё, что нужно
              для ремонта: от грунтовок и сухих смесей до профессионального электроинструмента.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: 'Товар в наличии', i: 'Warehouse' },
                { n: 'Честные цены', i: 'BadgeRussianRuble' },
                { n: 'Доставка по городу', i: 'Truck' },
                { n: 'Помощь в выборе', i: 'Headset' },
              ].map((x) => (
                <div key={x.n} className="flex items-center gap-3 border-l-4 border-primary pl-3 py-1">
                  <Icon name={x.i} size={20} className="text-primary" />
                  <span className="font-display uppercase text-sm tracking-wide">{x.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="container py-16 md:py-24">
        <p className="font-display uppercase tracking-[0.2em] text-primary text-sm mb-2">Доставка</p>
        <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mb-10">Как получить заказ</h2>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            { icon: 'PhoneCall', t: 'Оформите заказ', d: 'Позвоните или напишите — менеджер подтвердит наличие и сумму.' },
            { icon: 'Truck', t: 'Доставим по городу', d: 'Привезём заказ по Ростову-на-Дону в день обращения.' },
            { icon: 'Store', t: 'Или самовывоз', d: 'Заберите заказ самостоятельно в удобное рабочее время.' },
          ].map((s, i) => (
            <div key={s.t} className="bg-background p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display font-bold text-5xl text-primary">{i + 1}</span>
                <Icon name={s.icon} size={28} className="text-secondary" />
              </div>
              <h3 className="font-display font-semibold uppercase text-xl mb-2">{s.t}</h3>
              <p className="text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container max-w-3xl">
          <p className="font-display uppercase tracking-[0.2em] text-accent text-sm mb-2 text-center">FAQ</p>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mb-10 text-center">Частые вопросы</h2>
          <div className="space-y-px">
            {FAQ.map((f, i) => (
              <div key={i} className="border-b-2 border-secondary-foreground/15">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-display uppercase text-lg tracking-wide pr-4">{f.q}</span>
                  <Icon
                    name="Plus"
                    size={24}
                    className={`text-primary shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-secondary-foreground/70 animate-fade-in">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-display uppercase tracking-[0.2em] text-primary text-sm mb-2">Контакты</p>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl mb-8">Свяжитесь<br />с нами</h2>
            <div className="space-y-5">
              <a href={`tel:${PHONE}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                  <Icon name="Phone" size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display uppercase text-xs tracking-widest text-muted-foreground">Телефон</p>
                  <p className="font-display font-semibold text-xl group-hover:text-primary transition-colors">{PHONE_FMT}</p>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                  <Icon name="Mail" size={22} className="text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-display uppercase text-xs tracking-widest text-muted-foreground">Почта</p>
                  <p className="font-display font-semibold text-xl group-hover:text-primary transition-colors">{EMAIL}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center shrink-0">
                  <Icon name="MapPin" size={22} className="text-accent-foreground" />
                </div>
                <div>
                  <p className="font-display uppercase text-xs tracking-widest text-muted-foreground">Город</p>
                  <p className="font-display font-semibold text-xl">Ростов-на-Дону</p>
                </div>
              </div>
            </div>
          </div>

          {/* SCHEDULE */}
          <div className="bg-secondary text-secondary-foreground p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Clock" size={26} className="text-accent" />
              <h3 className="font-display font-bold uppercase text-2xl">График работы</h3>
            </div>
            <div className="space-y-4 font-display uppercase tracking-wide">
              <div className="flex items-center justify-between border-b border-secondary-foreground/15 pb-4">
                <span>Пн — Пт</span>
                <span className="text-accent font-semibold">9:00 — 16:00</span>
              </div>
              <div className="flex items-center justify-between border-b border-secondary-foreground/15 pb-4">
                <span>Обед</span>
                <span className="text-secondary-foreground/60">12:00 — 13:00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Сб — Вс</span>
                <span className="text-primary font-semibold">Выходной</span>
              </div>
            </div>
            <a href={`tel:${PHONE}`} className="block mt-8">
              <Button className="w-full rounded-none font-display uppercase tracking-wide" size="lg">
                <Icon name="Phone" size={18} className="mr-2" /> Позвонить
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary text-secondary-foreground border-t-4 border-primary">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary flex items-center justify-center -skew-x-12">
              <span className="font-display font-bold text-primary-foreground skew-x-12">А</span>
            </div>
            <span className="font-display font-bold text-xl">
              СТРОЙ<span className="text-primary lowercase">о</span>СНОВА
            </span>
          </div>
          <p className="font-display uppercase text-xs tracking-widest text-secondary-foreground/50">
            от ОСНОВЫ до ФИНИША
          </p>
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE}`} className="text-sm hover:text-primary transition-colors">{PHONE_FMT}</a>
            <span className="text-secondary-foreground/30">/</span>
            <a href={`mailto:${EMAIL}`} className="text-sm hover:text-primary transition-colors">{EMAIL}</a>
          </div>
        </div>
        <div className="container pb-6 text-center text-xs text-secondary-foreground/30">
          © {new Date().getFullYear()} СТРОЙоСНОВА. Строительные материалы и инструмент. Ростов-на-Дону.
        </div>
      </footer>
    </div>
  );
};

export default Index;
