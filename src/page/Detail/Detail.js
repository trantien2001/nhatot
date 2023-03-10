import { NavigateNext } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import Questions from '../Message/Questions';
import styles from './Detail.module.scss';
import DetailItem from './DetailItem';

function Detail() {
  return (
    <Box sx={{ maxWidth: '960px', margin: 'auto' }}>
      <Grid container>
        <Grid md={8} padding={'0 15px'}>
          <Box
            sx={
              {
                // position: 'relative'
              }
            }
          >
            <Box
              sx={
                {
                  // position: 'relative', overflow: 'hidden', outline: 'none'
                }
              }
            >
              <Box
                sx={
                  {
                    // position: 'relative', width: '100%', outline: 'none'
                  }
                }
              >
                <Box
                  sx={
                    {
                      // position: 'absolute',
                      // top: 0,
                      // bottom: 0,
                      // right: 0,
                      // left: 0,
                      // textAlign: 'center',
                      // outline: 'none',
                    }
                  }
                >
                  <img
                    width={'100%'}
                    src="https://cdn.chotot.com/hCdKb1TzdVTkZA_--C2atQ3YqfRaClGjprh9YU2VzyE/preset:view/plain/8b71d2c9ebb5f69bed429097129016e8-2813703992729791240.jpg"
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Grid container sx={{ display: 'flex' }}>
            <Grid sx={{ backgroundColor: 'red' }} xs={3} md={3}>
              <img
                width={'100%'}
                src="https://cdn.chotot.com/hCdKb1TzdVTkZA_--C2atQ3YqfRaClGjprh9YU2VzyE/preset:view/plain/8b71d2c9ebb5f69bed429097129016e8-2813703992729791240.jpg"
              />
            </Grid>
            <Grid sx={{ backgroundColor: 'red' }} xs={3} md={3}>
              <img
                width={'100%'}
                src="https://cdn.chotot.com/hCdKb1TzdVTkZA_--C2atQ3YqfRaClGjprh9YU2VzyE/preset:view/plain/8b71d2c9ebb5f69bed429097129016e8-2813703992729791240.jpg"
              />
            </Grid>
            <Grid sx={{ backgroundColor: 'red' }} xs={3} md={3}>
              <img
                width={'100%'}
                src="https://cdn.chotot.com/hCdKb1TzdVTkZA_--C2atQ3YqfRaClGjprh9YU2VzyE/preset:view/plain/8b71d2c9ebb5f69bed429097129016e8-2813703992729791240.jpg"
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              backgroundColor: '#fff',
              marginBottom: '8px',
              padding: '12px',
            }}
          >
            <h1 className={styles.title}>Cho thu?? nh??</h1>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Box>
                <p className={styles.price}>
                  1,5 tri???u/th??ng -{' '}
                  <span className={styles.acreage}>
                    25 m<sup>2</sup>
                  </span>
                </p>
              </Box>
              <Box display={'flex'}>
                <Box
                  sx={{
                    display: 'flex',
                    margin: '0 21px',
                  }}
                >
                  <img
                    style={{ padding: '4px' }}
                    src="https://static.chotot.com/storage/icons/svg/share-new.svg"
                  />
                  <p>Chia s???</p>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    margin: '0 20px',
                  }}
                >
                  <img
                    style={{ padding: '4px' }}
                    src="https://static.chotot.com/storage/icons/saveAd/save-ad.svg"
                  />
                  <p>L??u tin</p>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <img
                width={'20px'}
                src="https://static.chotot.com/storage/icons/logos/ad-param/location.svg"
              />
              <Box sx={{ marginLeft: '8px' }}>
                <span>
                  Ki???t 21 L?? Quang Sung, Ph?????ng Ch??nh Gi??n, Qu???n Thanh Kh??, ????
                  N???ng
                </span>
                <br />
                <Link className={styles.map}>
                  <p>Xem b???n ?????</p>
                  <p>
                    <NavigateNext />
                  </p>
                </Link>
              </Box>
            </Box>
            <DetailItem
              icon={
                'https://static.chotot.com/storage/icons/svg/order_timer.svg'
              }
              title={'????ng 6 gi??? tr?????c'}
            />
            <Box sx={{ display: 'flex' }}>
              <img
                width={'20px'}
                src="https://static.chotot.com/storage/icons/svg/shield.svg"
              />
              <span>&nbsp;&nbsp;Tin ???? ???????c duy???t. &nbsp;</span>
              <Link className={styles.map}>T??m hi???u th??m</Link>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: '#fff',
              marginBottom: '8px',
              padding: '12px',
            }}
          >
            <h1 className={styles.title}>?????c ??i???m b???t ?????ng s???n</h1>
            <Grid container>
              <Grid md={6}>
                <DetailItem
                  icon={
                    'https://static.chotot.com/storage/icons/logos/ad-param/ad_type.png'
                  }
                  title={'Cho thu??'}
                />
              </Grid>
              <Grid md={6}>
                <DetailItem
                  icon={
                    'https://static.chotot.com/storage/icons/logos/ad-param/size.png'
                  }
                  title={'Di???n t??ch: 25m2'}
                />
              </Grid>
              <Grid md={6}>
                <DetailItem
                  icon={
                    'https://static.chotot.com/storage/icons/logos/ad-param/furnishing_rent.png'
                  }
                  title={'T??nh tr???ng n???i th???t: nh?? tr???ng'}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              backgroundColor: '#fff',
              marginBottom: '8px',
              padding: '12px',
            }}
          >
            <h1 className={styles.title}>M?? t??? chi ti???t</h1>
            <p className={styles.detailP} itemprop="description">
              Cho thu?? nh?? <br />
              L???i ??i ri??ng <br />
              ??i???n n?????c ri??ng <br />
              Cho ng?????i thu?? c?? vi???c l??m ho???c gia ????nh ???, nh?? nh??? ko qu?? 4 ng?????i
            </p>
            <span className={styles.contact}>Nh???n ????? hi???n s???: 093838 ****</span>
          </Box>
        </Grid>
        <Grid md={4} sx={{}}>
          <Box
            sx={{
              backgroundColor: '#fff',
              marginBottom: '8px',
              padding: '12px',
              display: 'flex',
            }}
          >
            <Box className={styles.avatar} />
            <Box sx={{ paddingLeft: '8px', width: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <b>Tr???n Ti???n</b>
                <Link to={''} className={styles.profile}>
                  <p>
                    <p>Xem trang</p>
                    <NavigateNext />
                  </p>
                </Link>
              </Box>
              <Box>
                <DetailItem
                  icon={
                    'https://static.chotot.com/storage/default_images/pty/private-pty-icon.svg'
                  }
                  title={'C?? nh??n'}
                />
              </Box>
              <Box>
                <DetailItem
                  icon={
                    // 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Green_dot.svg/1024px-Green_dot.svg.png'
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1200px-Location_dot_grey.svg.png'
                  }
                  title={'Ch??a ho???t ?????ng'}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: '#fff',
              marginBottom: '8px',
              padding: '12px',
            }}
          >
            <Box>
              <h1 className={styles.title}>Li??n h??? v???i ng?????i b??n</h1>
              <Box className={styles.question}>
                <Questions />
              </Box>
            </Box>
            <Box>
              <Box className={styles.btnSdt}>
                <DetailItem
                  icon={
                    'https://static.chotot.com/storage/chotot-icons/svg/white-phone.svg'
                  }
                  sdt={'093838****'}
                  title={'B???M ????? HI???N S???'}
                />
              </Box>
              <Link className={styles.btnChat} to={`/messages`}>
                {' '}
                {/*/${IdUser}*/}
                <DetailItem
                  icon={
                    'https://static.chotot.com.vn/storage/chotot-icons/png/chat_green.png'
                  }
                  title={'CHAT V???I NG?????I B??N'}
                />
              </Link>
            </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Box>
              <DetailItem
                icon={
                  'https://storage.googleapis.com/static-chotot-com/storage/chotot-icons/svg/support.svg'
                }
                title={'C???n tr??? gi??p'}
              />
            </Box>
            <Box>
              <DetailItem
                icon={
                  'https://storage.googleapis.com/static-chotot-com/storage/chotot-icons/svg/warning_grey.svg'
                }
                title={'B??o c??o tin ????ng n??y'}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Box></Box> */}
    </Box>
  );
}

export default Detail;
