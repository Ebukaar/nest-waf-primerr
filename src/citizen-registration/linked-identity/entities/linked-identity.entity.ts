import { BioDatum } from "src/citizen-registration/bio-data/entities/bio-datum.entity";
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn,OneToOne } from "typeorm";


@Entity()
export class LinkedIdentity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    NIN: string;

    @Column()
    BVN: string;
  
    @Column()
    MobileNumbers: string;
 
    @JoinColumn()
    @OneToOne(type => BioDatum, BioDatum => BioDatum.LinkedIdentity, {cascade:true})
    BioDatum: BioDatum;
 
}
