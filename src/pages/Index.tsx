import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const achievements = [
    {
      title: "Диплом повышения квалификации",
      description: "Современные методики раннего развития детей",
      year: "2024",
      icon: "GraduationCap"
    },
    {
      title: "Грамота Министерства образования",
      description: "За выдающиеся достижения в педагогической деятельности",
      year: "2023",
      icon: "Award"
    },
    {
      title: "Сертификат специалиста",
      description: "Работа с детьми с особыми потребностями",
      year: "2023",
      icon: "BookOpen"
    },
    {
      title: "Победитель конкурса",
      description: "Лучший воспитатель года - региональный этап",
      year: "2022",
      icon: "Trophy"
    },
    {
      title: "Сертификат ФГОС",
      description: "Реализация ФГОС дошкольного образования",
      year: "2022",
      icon: "FileCheck"
    },
    {
      title: "Благодарность родителей",
      description: "За индивидуальный подход и профессионализм",
      year: "2024",
      icon: "Heart"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 glass-effect sticky top-0 z-50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <h1 className="text-xl font-bold gradient-text">Делис Татьяна Эдуардовна</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-all hover:scale-110 font-medium">
              Главная
            </a>
            <a href="#methods" className="text-foreground hover:text-primary transition-all hover:scale-110 font-medium">
              Методики
            </a>
            <a href="#documents" className="text-foreground hover:text-secondary transition-all hover:scale-110 font-medium">
              Документы
            </a>
            <a href="#achievements" className="text-foreground hover:text-primary transition-all hover:scale-110 font-medium">
              Достижения
            </a>
            <a href="#reviews" className="text-foreground hover:text-secondary transition-all hover:scale-110 font-medium">
              Отзывы
            </a>
            <a href="#contacts" className="text-foreground hover:text-accent transition-all hover:scale-110 font-medium">
              Контакты
            </a>
          </nav>
        </div>
      </header>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-gradient"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-sm animate-pulse-glow">
              Воспитатель МБДОУ №8 "Сказка" пгт Смоляниново
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              Делис Татьяна<br/>Эдуардовна
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Профессиональный воспитатель с <span className="font-bold text-primary">15-летним опытом</span> работы<br/>
              в дошкольном образовании 🎨✨
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <a href="#methods" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all">
                Мои методики
              </a>
              <a href="#contacts" className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
                Связаться
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-12 text-center">Обо мне 👩‍🏫</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary bg-gradient-to-br from-white to-primary/5">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <Icon name="Users" size={36} className="text-white" />
                  </div>
                </div>
                <h4 className="font-bold text-xl mb-2 text-primary">15 лет опыта</h4>
                <p className="text-muted-foreground">
                  Работа с детьми дошкольного возраста
                </p>
              </Card>
              <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-accent bg-gradient-to-br from-white to-accent/5">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                    <Icon name="Star" size={36} className="text-white" />
                  </div>
                </div>
                <h4 className="font-bold text-xl mb-2 text-accent">Соответствие должности</h4>
                <p className="text-muted-foreground">
                  Подтвержденная квалификация педагога
                </p>
              </Card>
              <Card className="p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-secondary bg-gradient-to-br from-white to-secondary/5">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                    <Icon name="Sparkles" size={36} className="text-white" />
                  </div>
                </div>
                <h4 className="font-bold text-xl mb-2 text-secondary">Авторские методики</h4>
                <p className="text-muted-foreground">
                  Разработка уникальных программ развития
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-white via-primary/5 to-secondary/5 border-2 border-primary/20">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                🌟 Моя педагогическая философия основана на <span className="font-bold text-primary">уважении к личности</span> каждого ребенка 
                и создании условий для его гармоничного развития. Я верю, что каждый ребенок 
                уникален и обладает огромным потенциалом.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                💡 В своей работе использую <span className="font-bold text-secondary">современные методики</span> дошкольного образования, 
                сочетая классические принципы с инновационными подходами. 
                Особое внимание уделяю <span className="font-bold text-accent">эмоциональному интеллекту</span> и творчеству.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 bg-gradient-to-b from-muted/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center">
              Образовательные методики 📚
            </h3>
            <p className="text-center text-foreground/70 text-lg mb-16 max-w-3xl mx-auto">
              В работе использую современные проверенные подходы дошкольного образования,
              которые помогают раскрыть потенциал каждого ребёнка
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white via-primary/5 to-primary/10 border-2 border-transparent hover:border-primary">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <Icon name="Blocks" size={32} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold gradient-text">Метод Монтессори</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Создание развивающей среды, где ребёнок самостоятельно выбирает занятия. 
                  Использую специальные Монтессори-материалы для развития мелкой моторики, 
                  сенсорного восприятия и логического мышления.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Самостоятельность</Badge>
                  <Badge variant="secondary" className="text-xs">Сенсорика</Badge>
                  <Badge variant="secondary" className="text-xs">Моторика</Badge>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-muted/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon name="Users" size={28} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Социо-игровая технология</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Обучение через игру в малых группах. Дети учатся договариваться, 
                  работать в команде, решать конфликты и помогать друг другу. 
                  Развивает коммуникативные навыки и эмоциональный интеллект.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Коммуникация</Badge>
                  <Badge variant="secondary" className="text-xs">Командная работа</Badge>
                  <Badge variant="secondary" className="text-xs">Социализация</Badge>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-muted/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Icon name="Lightbulb" size={28} className="text-secondary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Проектная деятельность</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Реализация образовательных проектов, где дети исследуют интересующие их темы. 
                  От идеи до результата: наблюдаем, экспериментируем, творим. 
                  Развивает познавательную активность и критическое мышление.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Исследование</Badge>
                  <Badge variant="secondary" className="text-xs">Творчество</Badge>
                  <Badge variant="secondary" className="text-xs">Критическое мышление</Badge>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-muted/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name="Heart" size={28} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Личностно-ориентированный подход</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Учитываю индивидуальные особенности, темп развития и интересы каждого ребёнка. 
                  Создаю ситуации успеха, поддерживаю инициативу и помогаю преодолевать трудности. 
                  Уважение к личности — основа моей работы.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Индивидуальность</Badge>
                  <Badge variant="secondary" className="text-xs">Поддержка</Badge>
                  <Badge variant="secondary" className="text-xs">Уважение</Badge>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Интеграция методик в повседневную практику
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Не использую методики изолированно — комбинирую их элементы в зависимости от 
                    задач и особенностей группы. Главный принцип: ребёнок в центре образовательного 
                    процесса, а методики — инструменты для его развития. Регулярно повышаю 
                    квалификацию, изучаю новые подходы и адаптирую их под реальные условия работы.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="documents" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center">
              Документы и сертификаты 🏆
            </h3>
            <p className="text-center text-foreground/70 text-lg mb-16 max-w-3xl mx-auto">
              Дипломы, сертификаты повышения квалификации и профессиональные награды
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="group overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary cursor-pointer">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                    <Icon name="GraduationCap" size={48} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-center mb-3 relative z-10">Диплом о высшем образовании</h4>
                  <Badge className="mb-4 relative z-10">2009</Badge>
                  <p className="text-center text-sm text-muted-foreground relative z-10">
                    Специальность: Дошкольное образование
                  </p>
                </div>
              </Card>

              <Card className="group overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-accent cursor-pointer">
                <div className="aspect-[3/4] bg-gradient-to-br from-accent/5 via-white to-primary/5 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                    <Icon name="Award" size={48} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-center mb-3 relative z-10">Сертификат соответствия</h4>
                  <Badge variant="secondary" className="mb-4 relative z-10">2024</Badge>
                  <p className="text-center text-sm text-muted-foreground relative z-10">
                    Соответствие занимаемой должности
                  </p>
                </div>
              </Card>

              <Card className="group overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-secondary cursor-pointer">
                <div className="aspect-[3/4] bg-gradient-to-br from-secondary/5 via-white to-accent/5 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                    <Icon name="BookOpen" size={48} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-center mb-3 relative z-10">Курсы повышения квалификации</h4>
                  <Badge variant="outline" className="mb-4 relative z-10">2023</Badge>
                  <p className="text-center text-sm text-muted-foreground relative z-10">
                    Современные методики дошкольного образования
                  </p>
                </div>
              </Card>

              <Card className="group overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary cursor-pointer">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                    <Icon name="Medal" size={48} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-center mb-3 relative z-10">Благодарность министерства</h4>
                  <Badge className="mb-4 relative z-10">2022</Badge>
                  <p className="text-center text-sm text-muted-foreground relative z-10">
                    За вклад в развитие дошкольного образования
                  </p>
                </div>
              </Card>

              <Card className="group overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-accent cursor-pointer">
                <div className="aspect-[3/4] bg-gradient-to-br from-accent/5 via-white to-primary/5 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                    <Icon name="Trophy" size={48} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-center mb-3 relative z-10">Диплом победителя конкурса</h4>
                  <Badge variant="secondary" className="mb-4 relative z-10">2021</Badge>
                  <p className="text-center text-sm text-muted-foreground relative z-10">
                    "Воспитатель года" - муниципальный этап
                  </p>
                </div>
              </Card>

              <Card className="group overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-secondary cursor-pointer">
                <div className="aspect-[3/4] bg-gradient-to-br from-secondary/5 via-white to-accent/5 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                    <Icon name="FileCheck" size={48} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-center mb-3 relative z-10">Сертификат семинара</h4>
                  <Badge variant="outline" className="mb-4 relative z-10">2023</Badge>
                  <p className="text-center text-sm text-muted-foreground relative z-10">
                    "ФГОС ДО: новые подходы к организации образовательного процесса"
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-12 text-center">
              Профессиональные достижения ⭐
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 bg-white"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={achievement.icon as any} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {achievement.year}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
              Отзывы родителей
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-muted/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Мария Петрова</h4>
                    <p className="text-sm text-muted-foreground">Мама Артёма, 5 лет</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Татьяна Эдуардовна - замечательный педагог! Мой сын с радостью идёт в садик каждый день. 
                  Она нашла индивидуальный подход к ребёнку, помогла раскрыть его творческие способности. 
                  Очень благодарны за профессионализм и заботу!
                </p>
              </Card>

              <Card className="p-6 bg-muted/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Анна Сидорова</h4>
                    <p className="text-sm text-muted-foreground">Мама Софии, 4 года</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Отличный воспитатель! Дочка стала более уверенной в себе, научилась многому новому. 
                  Татьяна Эдуардовна всегда на связи, рассказывает о достижениях ребёнка, даёт полезные советы. 
                  Рекомендуем от всей души!
                </p>
              </Card>

              <Card className="p-6 bg-muted/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Дмитрий Козлов</h4>
                    <p className="text-sm text-muted-foreground">Папа Максима, 6 лет</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Профессионал своего дела! Сын за год подготовки к школе многому научился. 
                  Татьяна Эдуардовна использует современные методики, проводит интересные занятия. 
                  Спасибо за подготовку к школе!
                </p>
              </Card>

              <Card className="p-6 bg-muted/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Елена Новикова</h4>
                    <p className="text-sm text-muted-foreground">Мама Даши, 5 лет</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Очень внимательный и чуткий педагог! Дочка научилась общаться со сверстниками, 
                  стала более самостоятельной. Татьяна Эдуардовна создаёт тёплую атмосферу в группе, 
                  каждый ребёнок чувствует себя важным и любимым.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
              Контакты
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white">
                <h4 className="text-xl font-semibold mb-6 text-foreground">Свяжитесь со мной</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Адрес</p>
                      <p className="text-muted-foreground text-sm">
                        МБДОУ №8 "Сказка"<br />
                        пгт Смоляниново, Приморский край
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Телефон</p>
                      <p className="text-muted-foreground text-sm">+7 (XXX) XXX-XX-XX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-muted-foreground text-sm">delis.tatyana@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Время работы</p>
                      <p className="text-muted-foreground text-sm">
                        Пн-Пт: 7:00 - 19:00<br />
                        Сб-Вс: Выходной
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white">
                <h4 className="text-xl font-semibold mb-6 text-foreground">Напишите мне</h4>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Введите ваш email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ваше сообщение"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    Отправить сообщение
                  </button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Делис Татьяна Эдуардовна. Профессиональное портфолио воспитателя.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;