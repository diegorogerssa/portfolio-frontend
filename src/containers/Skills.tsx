'use client';

import { SkillBar } from '@/components/SkillBar';

export const Skills = () => {
  const skills = [
    { name: 'HTML', skill: 50 },
    { name: 'CSS', skill: 80 },
    { name: 'Javascript', skill: 80 },
    { name: 'React', skill: 30 },
    { name: 'Next', skill: 80 },
    { name: 'Tailwind', skill: 80 },
    { name: 'Node', skill: 80 },
    { name: 'MongoDB', skill: 80 },
    { name: 'SQL', skill: 80 },
    { name: 'Git', skill: 80 },
  ];
  return (
    <section className="h-skills border-2">
      <h2>Skills</h2>
      {skills.map((skill) => (
        <SkillBar key={skill.name} hability={skill.name} skill={skill.skill} />
      ))}
    </section>
  );
};
