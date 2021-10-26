import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import ReactPaginate from 'react-paginate';
import { ArrowUp, ArrowDown, Search } from 'react-feather';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Layout from '../../components/Layout';
import apiService from '../../utils/apiService';
import { CategoriesResponse } from '../../@types/response/categories/categories-response';

interface CategoryProps {
  categoryRes: CategoriesResponse
}

type FormSearchValues = {
  keyword: string;
};

export default function Categories(props: CategoryProps) {
  const { categoryRes } = props;
  const { data, meta } = categoryRes.result;
  const router = useRouter();

  function sortBuilder(sort: string) {
    const { pathname, query } = router;
    let restructureSort = sort;
    if (query.sort === sort) {
      restructureSort = !restructureSort.includes('-') ? `-${restructureSort}` : sort;
    }

    query.sort = restructureSort;
    router.push({
      pathname,
      query,
    });
  }

  function isSortASC(sort: string) {
    const { query } = router;
    const restructureSort = query.sort;
    if (query.sort === sort) {
      return restructureSort?.includes('-');
    }
    return true;
  }

  const pagginationHandler = (page: any) => {
    const { pathname, query } = router;
    query.page = page.selected + 1;
    query.limit = query.limit ?? '10';
    query.sort = query.sort ?? 'id';
    query.keyword = query.keyword ?? '';

    router.push({
      pathname,
      query,
    });
  };

  const {
    register,
    handleSubmit,
  } = useForm<FormSearchValues>();
  const onSubmitSearch: SubmitHandler<FormSearchValues> = async (data) => {
    const { pathname, query } = router;
    console.log("ok")
    try {
      query.keyword = data.keyword;

      router.push({
        pathname,
        query,
      });
    } catch (error) {
      router.push({
        pathname,
        query,
      });
    }
    // const auth = await signIn('credentials',
    // { redirect: false, email: data.email, password: data.password });
    // console.log(auth);
  };

  return (
    <Layout>
      <div className="overflow-x-auto">
        <div className="w-full p-6">

          <div className="flex pb-5">
            <form onSubmit={handleSubmit(onSubmitSearch)}>
              <div className="flex bg-white items-center rounded-md border-2 border-gray-300">
                <input
                  {...register('keyword', { required: false })}
                  className="py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Search"
                />

                <div className="p-1">
                  <button type="submit" className="rounded-full p-2 focus:outline-none flex items-center justify-center">
                    <Search size={18} />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-white shadow-md rounded">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6">
                    <div className="flex justify-start">
                      <button type="button" onClick={() => sortBuilder('name')}>{isSortASC('name') ? <ArrowUp size={20} /> : <ArrowDown size={20} />}</button>
                      {' '}
                      Name
                    </div>

                  </th>
                  <th className="py-3 px-6">
                    <div className="flex justify-start">
                      <button type="button" onClick={() => sortBuilder('updatedAt')}>{isSortASC('updatedAt') ? <ArrowUp size={20} /> : <ArrowDown size={20} />}</button>
                      {' '}
                      Updated
                    </div>

                  </th>
                  <th className="py-3 px-6">
                    <div className="flex justify-center">
                      <button type="button" onClick={() => sortBuilder('isActive')}>{isSortASC('isActive') ? <ArrowUp size={20} /> : <ArrowDown size={20} />}</button>
                      {' '}
                      Status
                    </div>

                  </th>
                  <th className="py-3 px-6">
                    <div className="flex justify-center">
                      Actions
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {
                  data?.map((category) => (
                    <tr key={category.id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{category.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{category.updatedAt}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className={`${category.isActive ? 'bg-green-200' : 'bg-red-200'} text-black py-1 px-3 rounded-full text-xs`}>{category.isActive ? 'Active' : 'Archive'}</span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
          <div className="flex justify-between py-5 text-sm">
            <p>
              Showing
              {' '}
              {meta.currentPage * meta.itemCount}
              {' '}
              to
              {' '}
              {(meta.currentPage * meta.itemCount) + meta.itemCount}
              {' '}
              of
              {' '}
              {meta.totalItems}
              {' '}
              entries
            </p>
            <ReactPaginate
              previousLabel="Prev"
              nextLabel="Next"
              breakLabel="..."
              breakClassName="break-me"
              activeClassName="active"
              containerClassName="flex"
              activeLinkClassName="text-blue-600 font-semibold"
              pageClassName="w-8 md:flex justify-center items-center cursor-pointer transition duration-150"
              initialPage={meta.currentPage - 1}
              pageCount={meta.totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={pagginationHandler}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const categoryReq = await apiService(ctx).get('categories', {
    params: {
      page: query.page ?? '1',
      limit: query.limit ?? '10',
      sort: query.sort ?? 'id',
      keyword: query.keyword ?? '',
    },
  });

  const categoryRes: CategoriesResponse = categoryReq.data;

  return {
    props: {
      categoryRes,
    },
  };
};
