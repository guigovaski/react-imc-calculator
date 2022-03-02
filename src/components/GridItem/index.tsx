import { LevelsType } from '../../helpers/imc';
import styles from './GridItem.module.css';

import up from '../../assets/images/down.png';
import down from '../../assets/images/up.png';

type Props = {
    data: LevelsType
}

export const GridItem = ({ data }: Props) => { 
    return (
        <div className={styles.mainContainer} style={{backgroundColor: data.color}}>
            <div className={styles.icon}>
                <img src={data.icon === 'up' ? up : down } alt="" width="40" />
            </div>
            <div className={styles.title}><h3>{data.title}</h3></div>
            
            {data.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de <strong>{data.yourImc}</strong> kg/m²</div>
            }
            
            <div className={styles.info}>
                <>
                    IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}