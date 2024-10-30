import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import quotes from '../../public/quotes.json'; 
import html2canvas from 'html2canvas'; 
import CameraIcon from '@mui/icons-material/CameraAlt'; 
import ShareIcon from '@mui/icons-material/Share'; 

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [currentQuote, setCurrentQuote] = React.useState(null);
  const quoteRef = React.useRef(); // Create a ref for the quote container

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const handleScreenshot = () => {
    if (quoteRef.current) {
      html2canvas(quoteRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'quote.png';
        link.click();
      });
    }
  };

  const handleShare = () => {
    if (currentQuote) {
      const shareData = {
        title: `Quote from ${currentQuote.anime}`,
        text: `"${currentQuote.quote}" - ${currentQuote.character}`,
        url: window.location.href, // Optional: replace with a specific URL if needed
      };

      navigator.share(shareData)
        .then(() => console.log('Quote shared successfully!'))
        .catch((error) => console.error('Error sharing quote:', error));
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(true);
          generateRandomQuote();
        }}
        sx={{
          mt: 9,
          width: { xs: '12em', sm: '15em' },
          height: { xs: '4em', sm: '5em' },
          borderRadius: '3em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          backgroundColor: '#1C1A1C',
          cursor: 'pointer',
          transition: 'all 0.45s ease-in-out',
          '&:hover': {
            backgroundImage: 'linear-gradient(to top, #A47CF3, #683FEA)',
            boxShadow: 'inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4), inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 4px rgba(255, 255, 255, 0.2), 0px 0px 180px 0px #9917FF',
            transform: 'translateY(-2px)',
          },
        }}
      >
        <svg
          height="24"
          width="24"
          fill="#FFFFFF"
          viewBox="0 0 24 24"
          data-name="Layer 1"
          id="Layer_1"
          style={{
            fill: '#FFF',
            transition: 'all 0.8s',
            transform: 'scale(1)',
          }}
        >
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
        </svg>
        <span style={{ fontWeight: 600, color: '#FFF', fontSize: '1rem' }} className="group-hover:text-white">
          Generate
        </span>
      </Button>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 2, sm: 0 },
        }}
      >
        <Sheet
          className=' rounded-b-md '
          variant="outlined"
          sx={{
            maxWidth: { xs: 350, sm: 500 },
            width: '100%',
            height: { xs: 350, sm: 300 },
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
            overflowY: 'auto'
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1  }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: 'lg', mb: 1 }}
          >
            Random Quote
          </Typography>
          <div ref={quoteRef}>
            {currentQuote ? (
              <>
                <Typography id="modal-desc" textColor="text.primary">
                  "{currentQuote.quote}"
                </Typography>
                <Typography textColor="text.secondary" sx={{ mt: 1 }}>
                  - {currentQuote.character} from {currentQuote.anime}
                </Typography>
              </>
            ) : (
              <Typography id="modal-desc" textColor="text.tertiary">
                Click "Generate" to see a random quote.
              </Typography>
            )}

{currentQuote && (
            <>
              <div className=" flex w-full justify-between item-center mt-3">
                <button
                  type='button'
                  onClick={handleScreenshot}
                  className=''
                >
                  <small className=' hidden hover:flex sr-only'> screenshot</small>
                  <CameraIcon sx={{ mr: 1, color: 'black' }} />
                </button>
                <button
                  type='button'
                  onClick={handleShare}
                  className=''
                >
                  <ShareIcon sx={{ mr: 1, color: 'black' }} />
                </button>
              </div>
            </>
          )}
          </div>  
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
