import { signOut } from '@/auth';

export function SignOutButton() {
  return (
    < form 
        action= {async async => {
        'use server';
        await signOut({
          redirectTo: '/',
        });
      }}
    >
      <button
        type="submit"
        className="rounded bg-red-500 px-3 py-1 text-white"
      >
        Sign Out
      </button>
    </form>
  );
}