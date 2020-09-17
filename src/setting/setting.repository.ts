import { Repository, EntityRepository } from "typeorm";
import { CreateSettingDto } from './dto/create-setting.dto';
import { Setting } from './setting.entity';

@EntityRepository(Setting)
export class SettingRepository extends Repository<Setting> {
  async getSetting(): Promise<Setting[]> {
    const query = this.createQueryBuilder('setting');
    const setting = await query.getMany();
    return setting;
  }

  async createSetting(createSettingDto: CreateSettingDto): Promise<Setting> {
    const { name, value } = createSettingDto;
    const setting = new Setting();
    setting.name = name;
    setting.value = value;
    await setting.save();

    return setting;
  } 

}
