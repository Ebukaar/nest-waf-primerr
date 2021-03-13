
import { Column, Entity, PrimaryGeneratedColumn,OneToOne } from "typeorm";
import {LinkedIdentity} from "../../linked-identity/entities/linked-identity.entity";

@Entity()
export class BioDatum {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;

    @Column({nullable: true})
    middleName: string;
  
    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;

    @Column({nullable: true})
    nationality: string;

    @Column()
    countryOfBirth: string;

    @Column()
    stateOfBirth: string;

    @Column()
    townOfBirth: string;

    @Column({nullable: true})
    residenceAddress: string;

    @Column()
    profession: string;
  
    @Column({ default: true })
    isActive: boolean;

    @OneToOne(type => LinkedIdentity, LinkedIdentity => LinkedIdentity.BioDatum)
    LinkedIdentity: LinkedIdentity;
}
