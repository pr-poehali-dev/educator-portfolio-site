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
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Делис Татьяна</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#achievements" className="text-foreground hover:text-primary transition-colors">
              Достижения
            </a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Воспитатель МБДОУ №8 "Сказка" пгт Смоляниново Шкотовского муниципального округа Приморского края</Badge>
            <h2 className="md:text-6xl mx-14 my-[30px] px-11 text-base font-semibold text-blue-900">Делис Татьяна Эдуардовна</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Профессиональный воспитатель с 15-летним опытом работы в дошкольном образовании. 
              Специализируюсь на раннем развитии детей и индивидуальном подходе к каждому ребенку.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Обо мне</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2">15 лет опыта</h4>
                <p className="text-muted-foreground text-sm">
                  Работа с детьми дошкольного возраста
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Star" size={32} className="text-accent" />
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2">Соответсвие занимаемой должности</h4>
                <p className="text-muted-foreground text-sm">
                  Подтвержденная квалификация педагога
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon name="Sparkles" size={32} className="text-secondary-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2">Авторские методики</h4>
                <p className="text-muted-foreground text-sm">
                  Разработка уникальных программ развития
                </p>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Моя педагогическая философия основана на уважении к личности каждого ребенка 
                и создании условий для его гармоничного развития. Я верю, что каждый ребенок 
                уникален и обладает огромным потенциалом, который важно раскрыть через 
                индивидуальный подход и творческое взаимодействие.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                В своей работе использую современные методики дошкольного образования, 
                сочетая классические педагогические принципы с инновационными подходами. 
                Особое внимание уделяю эмоциональному интеллекту, развитию креативности 
                и формированию социальных навыков у детей.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
              Профессиональные достижения
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