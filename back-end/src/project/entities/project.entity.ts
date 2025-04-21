import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  imagePath?: string;

  @Column()
  breafDescreption: string;

  @Column({ type: 'text' })
  descreption: string;

  @Column({ nullable: true })
  githubLink?: string;

  @Column({ nullable: true })
  demoLink?: string;
}
