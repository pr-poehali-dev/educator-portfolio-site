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
          <h1 className="text-xl font-bold text-primary">Елена Иванова</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Обо мне
            </a>
            <a href="#achievements" className="text-foreground hover:text-primary transition-colors">
              Достижения
            </a>
          </nav>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Воспитатель МБДОУ №8 "Сказка" пгт Смоляниново Шкотовского муниципального округа Приморского края</Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Елена Иванова
            </h2>
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
                <h4 className="font-semibold text-lg mb-2">Высшая категория</h4>
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

      <footer className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Елена Иванова. Профессиональное портфолио воспитателя.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;