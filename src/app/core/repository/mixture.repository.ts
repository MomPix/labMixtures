import { Mixture} from '../entity/mixture';

export abstract class MixtureRepository {

  public abstract getAllMixtures(): Promise<Mixture[]>;

  public abstract createMixture(mixture: Mixture): Promise<Mixture>;

  public abstract editMixture(id: string, mixture: Mixture): Promise<Mixture>;

  public abstract deleteMixture(id: string): Promise<void>;

}
