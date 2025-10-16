import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {

  return (
    <div className="min-h-screen relative overflow-hidden" 
         style={{
           backgroundImage: 'url(https://cdn.poehali.dev/projects/eef58404-4c75-4b67-8ac5-051baf4074d7/files/90707202-3bae-454b-b9e9-5e56b7169271.jpg)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5E6D3]/80 to-[#F5E6D3]/95" />
      
      <div className="relative z-10">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="relative vintage-ornament">
              <div className="text-center mb-12 animate-fade-in">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Icon name="Cog" className="w-12 h-12 text-[#8B4513] gear-rotate" />
                  <h1 className="text-6xl md:text-8xl font-bold text-[#2C1810] tracking-wider">
                    КОТИЛЬОН
                  </h1>
                  <Icon name="Cog" className="w-12 h-12 text-[#8B4513] gear-rotate" style={{animationDirection: 'reverse'}} />
                </div>
                
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#8B4513]" />
                  <Icon name="Sparkles" className="w-6 h-6 text-[#D4AF37]" />
                  <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#8B4513]" />
                </div>
                
                <p className="text-2xl md:text-3xl text-[#2C1810] font-semibold mb-2">
                  Косплей Фестиваль
                </p>
                <p className="text-xl text-[#8B4513] italic">
                  в стиле викторианской эпохи паровых машин
                </p>
              </div>

              <Card className="p-8 md:p-12 bg-[#F5E6D3]/95 border-4 border-[#8B4513] shadow-2xl backdrop-blur-sm">
                <div className="relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#8B4513] text-[#F5E6D3] px-6 py-2 text-sm font-bold tracking-widest">
                    ПРИГЛАШЕНИЕ
                  </div>
                  
                  <div className="text-center space-y-6 mt-4">
                    <p className="text-lg md:text-xl text-[#2C1810] leading-relaxed font-light">
                      Уважаемые дамы и господа!
                    </p>
                    <p className="text-base md:text-lg text-[#2C1810] leading-relaxed">
                      Приглашаем вас на грандиозный фестиваль косплея в стиле стимпанк. 
                      Погрузитесь в атмосферу викторианской эпохи, где паровые машины 
                      встречаются с футуристическими изобретениями.
                    </p>
                    
                    <div className="flex items-center justify-center gap-4 my-8">
                      <Icon name="Clock" className="w-8 h-8 text-[#8B4513]" />
                      <Icon name="Glasses" className="w-8 h-8 text-[#D4AF37]" />
                      <Icon name="Sparkles" className="w-8 h-8 text-[#8B4513]" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-[#F5E6D3]/95 border-2 border-[#8B4513] hover:shadow-xl transition-all duration-300 hover-scale">
                <div className="text-center space-y-4">
                  <Icon name="Calendar" className="w-12 h-12 text-[#D4AF37] mx-auto" />
                  <h3 className="text-2xl font-bold text-[#2C1810]">Когда</h3>
                  <p className="text-[#8B4513] text-lg">
                    15 ноября 2025<br />
                    14:00 - 22:00
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-[#F5E6D3]/95 border-2 border-[#8B4513] hover:shadow-xl transition-all duration-300 hover-scale">
                <div className="text-center space-y-4">
                  <Icon name="MapPin" className="w-12 h-12 text-[#D4AF37] mx-auto" />
                  <h3 className="text-2xl font-bold text-[#2C1810]">Где</h3>
                  <p className="text-[#8B4513] text-lg">
                    Центральный<br />
                    Выставочный Зал
                  </p>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 bg-[#F5E6D3]/95 border-2 border-[#8B4513]">
                <div className="flex items-start gap-4">
                  <Icon name="Music" className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#2C1810] mb-3">Программа</h3>
                    <ul className="space-y-2 text-[#8B4513]">
                      <li>• Конкурс косплея с призами</li>
                      <li>• Мастер-классы по созданию реквизита</li>
                      <li>• Викторианский бал</li>
                      <li>• Фотозоны в стиле стимпанк</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-[#F5E6D3]/95 border-2 border-[#8B4513]">
                <div className="flex items-start gap-4">
                  <Icon name="Award" className="w-8 h-8 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#2C1810] mb-3">Призы</h3>
                    <ul className="space-y-2 text-[#8B4513]">
                      <li>• Лучший костюм - 50 000₽</li>
                      <li>• Лучший реквизит - 30 000₽</li>
                      <li>• Выбор зрителей - 20 000₽</li>
                      <li>• Участие в профессиональной фотосессии</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-[#2C1810] mb-4">Как добраться</h2>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-[#8B4513]" />
                <Icon name="Map" className="w-6 h-6 text-[#D4AF37]" />
                <div className="h-px w-16 bg-[#8B4513]" />
              </div>
            </div>

            <Card className="p-4 bg-[#F5E6D3]/95 border-4 border-[#8B4513] shadow-2xl overflow-hidden">
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=37.617700,55.755800&z=15&l=map&pt=37.617700,55.755800,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="border-2 border-[#8B4513]/30"
                  title="Карта места проведения"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-[#2C1810] font-semibold text-lg mb-2">
                  Центральный Выставочный Зал
                </p>
                <p className="text-[#8B4513] mb-4">
                  г. Москва, ул. Примерная, д. 1
                </p>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Icon name="Instagram" className="w-6 h-6 text-[#8B4513] cursor-pointer hover:text-[#D4AF37] transition-colors" />
                  <Icon name="Facebook" className="w-6 h-6 text-[#8B4513] cursor-pointer hover:text-[#D4AF37] transition-colors" />
                  <Icon name="Twitter" className="w-6 h-6 text-[#8B4513] cursor-pointer hover:text-[#D4AF37] transition-colors" />
                </div>
                <p className="text-sm text-[#8B4513] italic mt-4">
                  По всем вопросам: festival@cotillion.ru
                </p>
              </div>
            </Card>
          </div>
        </section>

        <footer className="relative py-8 text-center">
          <div className="absolute inset-0 bg-[#2C1810]/80 backdrop-blur-sm" />
          <div className="relative z-10 flex items-center justify-center gap-3">
            <Icon name="Cog" className="w-6 h-6 text-[#D4AF37] gear-rotate" />
            <p className="text-[#F5E6D3] text-sm">
              © 2025 Фестиваль "Котильон". Все механизмы защищены.
            </p>
            <Icon name="Cog" className="w-6 h-6 text-[#D4AF37] gear-rotate" style={{animationDirection: 'reverse'}} />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;