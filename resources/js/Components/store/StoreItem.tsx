import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
export default function StoreItem() {
  return (
    <div className="lg:w-1/6 w-full sm:w-1/2 md:w-1/4 block min-w-[250px]">
      <div className="my-4 bg-white p-2 background-shadow">
        <div className="flex justify-center p-4 relative">
          <div className="absolute top-2 z-10 right-2">
            <IconButton color="primary">
              <FavoriteIcon />
            </IconButton>
          </div>
          <span
            style={{
              boxSizing: 'border-box',
              display: 'inline-block',
              overflow: 'hidden',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: 'relative',
              maxWidth: '100%',
            }}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWidth: '100%',
              }}
            >
              <img
                alt=""
                aria-hidden="true"
                src="/image/valyouXshirt.webp"
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
              />
            </span>
          </span>
        </div>
        <div className="p-0">
          <h5 className="mb-2 lg:text-2xl font-bold tracking-tight text-gray-900 ">
            Valyou X Tees
          </h5>
          <p className="mb-3 lg:font-normal text-gray-700 ">
            Founding Member Black T shirt.
          </p>
          <div className="flex md:text-lg items-center justify-between">
            <div className="flex">
              <p className="font-bold px-1">$ 120</p>
              <p className=" text-gray-600 line-through">$ 220</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
