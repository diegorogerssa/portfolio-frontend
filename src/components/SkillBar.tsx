'use client';

import { MdInsertEmoticon } from 'react-icons/md';

type SkillBarProps = {
  skill: number;
  hability: string;
};

export const SkillBar = ({ hability, skill }: SkillBarProps) => {
  return (
    <ul>
      <li className="flex items-center">
        <MdInsertEmoticon />
        <div className="flex flex-col">
          {hability}
          <progress value={skill} max="100">
            {skill}%
          </progress>
        </div>
      </li>
    </ul>
  );
};
